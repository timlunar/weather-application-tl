<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  historyResults: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="result-wrapper">
    <div class="result-wrapper__header">
      <h3>{{ title }} ({{ historyResults.length }})</h3>

      <button v-if="historyResults.length" class="delete-history" @click="$emit('deleteHistory')">
        Delete history
      </button>
    </div>

    <div class="result-container__inner">
      <div
        v-for="(result, index) in historyResults"
        :key="`result-${index}`"
        class="result-container__inner-wrapper"
        @click="$emit('emit', result.name)"
      >
        <div class="result-card">
          <div class="result-card__header">
            <div class="result-card__header-title">
              <h2>{{ result.name }}</h2>
              <span class="result-card__date">({{ result.date }})</span>
            </div>
            <h2>{{ result.temp }}°C</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
