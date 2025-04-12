<template>
    <div id="landing-page">
      <div v-if="isLoading" class="loading-screen">
        <div class="initial-logo">
          <span class="logo-letter">A</span>
        </div>
      </div>
      <div v-else>
        <headerComponent />
        <socialMedia />
        <mainPage />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import headerComponent from './headerComponent.vue'
  import socialMedia from './socialMedia.vue'
  import mainPage from './mainPage.vue'
  
  const isLoading = ref(true)
  
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 1500)
  })
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  </style>
  