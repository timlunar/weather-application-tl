<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="header">
    <div class="overlay">
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>

<style></style>
