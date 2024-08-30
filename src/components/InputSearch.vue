<script setup>
defineProps({
  search: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  maxLength: {
    type: Number,
    default: 100
  },
  errorMessage: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <input
      :value="search"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxLength"
      class="input"
      @input="$emit('searchChanged', $event.target.value)"
    />

    <span v-if="errorMessage" class="input-error">{{ errorMessage }}</span>
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/_input.scss" />
