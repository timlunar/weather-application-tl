import { ref } from 'vue'

export function useResult() {
  const historyResults = ref([])
  const currentCityData = ref({})

  function dateFormatter() {
    return new Date().toLocaleString().replaceAll('/', '.')
  }

  function updateResults(result, name) {
    if (historyResults.value.length >= 5) {
      historyResults.value.pop()
    }

    // Temp object to add date and name fields and transform snake case variables
    const newResult = {
      temp: Math.floor(result.temp),
      feelsLike: Math.floor(result.feels_like),
      tempMin: Math.floor(result.temp_min),
      tempMax: Math.floor(result.temp_max),
      humidity: Math.floor(result.humidity),
      date: dateFormatter(),
      name: name
    }

    historyResults.value.unshift(newResult)
    currentCityData.value = newResult
    localStorage.setItem('historyResults', JSON.stringify(historyResults.value))
  }

  function findCorrectCity(cityName) {
    const findIndex = historyResults.value.findIndex(({ name }) => name === cityName)
    if (findIndex !== -1) {
      currentCityData.value = historyResults.value[findIndex]
    }
  }

  return { historyResults, currentCityData, updateResults, findCorrectCity }
}
