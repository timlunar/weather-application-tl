<script setup>
import CurrentResults from '@/components/results/CurrentResults.vue'
import HistoryResults from '@/components/results/HistoryResults.vue'

defineProps({
  historyResults: {
    type: Array,
    default: () => []
  },
  currentCityData: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <section class="result-container">
    <current-results :current-city-data="currentCityData" />

    <history-results
      title="History of results"
      :history-results="historyResults"
      @emit="$emit('displayCity', $event)"
      @deleteHistory="$emit('deleteHistory')"
    />
  </section>
</template>

<style scoped></style>
