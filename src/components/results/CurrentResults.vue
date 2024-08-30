<script setup>
import BodyResults from '@/components/results/BodyResults.vue'

defineProps({
  currentCityData: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="result-wrapper fixed">
    <h3>Weather result for city: {{ currentCityData.name }}</h3>

    <div class="result-wrapper__data">
      <body-results
        v-if="currentCityData.name"
        :humidity="currentCityData.humidity"
        :temp-max="currentCityData.tempMax"
        :temp-min="currentCityData.tempMin"
        :feels-like="currentCityData.feelsLike"
        :temp="currentCityData.temp"
      />
    </div>
  </div>
</template>

<style scoped></style>
