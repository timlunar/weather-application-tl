<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import InputSearch from '@/components/InputSearch.vue'
import ResultSection from '@/components/ResultSection.vue'
import { onMounted } from 'vue'
import { useSearch } from '@/composables/useSearch.js'

const {
  search,
  updateSearch,
  searchError,
  historyResults,
  currentCityData,
  clearSearchHistory,
  displayCity
} = useSearch()

onMounted(() => {
  // If user has history data saved in browser storage, prefill data with results
  if (localStorage.getItem('historyResults')) {
    historyResults.value = JSON.parse(localStorage.getItem('historyResults'))
  }
})
</script>

<template>
  <header-component title="Let me weather that for you" />

  <main class="main-container">
    <input-search
      placeholder="Enter city name"
      :search="search"
      :error-message="searchError"
      @searchChanged="updateSearch($event)"
    />

    <result-section
      :history-results="historyResults"
      :currentCityData="currentCityData"
      @displayCity="displayCity($event)"
      @deleteHistory="clearSearchHistory"
    />
  </main>
</template>

<style lang="scss">
@import './assets/scss/index.scss';
</style>
