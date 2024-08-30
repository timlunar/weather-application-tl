import { ref, watch } from 'vue'
import { useResult } from '@/composables/useResult.js'
import debounce from 'lodash.debounce'
import axios from '@/services/axios.js'

export function useSearch() {
  const search = ref('')
  const { historyResults, currentCityData, updateResults, findCorrectCity } = useResult()
  const searchError = ref('')
  const doNotRequest = ref(false)

  const appId = import.meta.env.VITE_APP_ID

  function updateSearch(value, skipRequest = false) {
    doNotRequest.value = skipRequest
    search.value = value.trim()
  }

  function displayCity(value) {
    findCorrectCity(value)
    updateSearch(value, true)
  }

  function clearSearchHistory() {
    localStorage.removeItem('historyResults')
    historyResults.value = []
    currentCityData.value = {}
    searchError.value = ''
    search.value = ''
  }

  watch(
    search,
    debounce(async (value) => {
      if (searchError.value) searchError.value = '' // If error was once active, clear it

      // If user deletes everything in search input, do not make a request - just clear data
      if (!value) {
        currentCityData.value = {}
        return
      }

      // When user clicks on history result, input field changes as well
      // Therefore we skip to prevent another unnecessary request
      if (doNotRequest.value) {
        return
      }

      try {
        const { data } = await axios.get(`?units=metric&q=${value}&appid=${appId}`)
        updateResults(data.main, data.name)
      } catch (e) {
        if (e.status === 404) {
          searchError.value = `Requested city does not exist.`
        } else {
          searchError.value = 'Request failed.'
        }
        console.error(e)
      }
    }, 500)
  )

  return {
    search,
    updateSearch,
    searchError,
    historyResults,
    currentCityData,
    clearSearchHistory,
    displayCity
  }
}
