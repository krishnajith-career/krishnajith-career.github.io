<template>
  <div id="app">
    <landing-page></landing-page>
  </div>
</template>

<script setup>
import landingPage from './components/portfolio/landingPage.vue'
import { ref, onMounted } from 'vue'
var theme = ref(localStorage.getItem('theme') || 'light')
onMounted(()=>{
  document.body.classList.toggle('light-theme', theme.value === 'light');
})
</script>

<style lang="scss">@import './assets/styles/theme.scss'</style>
