<script setup>
defineProps({
  temp: {
    type: Number,
    default: null
  },
  feelsLike: {
    type: Number,
    required: true
  },
  tempMin: {
    type: Number,
    required: true
  },
  tempMax: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <p v-if="temp">Temperature: {{ temp }}°C</p>
  <p>Feels like: {{ feelsLike }}°C</p>
  <p>Min: {{ tempMin }}°C</p>
  <p>Max: {{ tempMax }}°C</p>
  <p>Humidity: {{ humidity }}%</p>
</template>

<style scoped></style>
