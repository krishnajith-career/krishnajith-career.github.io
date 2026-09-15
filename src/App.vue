<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import HomePage  from './components/HomePage.vue'
import AboutMe  from './components/AboutMe.vue'
import NavBar from './components/NavBar.vue'
import Skill from './components/Skill.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'

const current = ref(0)
const isMobileNavOpen = ref(false)

const sections = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
]


const goTo = (index) => {
  current.value = index
  isMobileNavOpen.value = false
  document.getElementById(sections[index].id)?.scrollIntoView({ behavior: 'smooth' })
}

const handleScroll = () => {
  const middle = window.innerHeight * 0.45
  let active = 0
  sections.forEach((section, index) => {
    const el = document.getElementById(section.id)
    if (el && el.getBoundingClientRect().top <= middle) active = index
  })
  current.value = active
}

const progress = computed(() => `${current.value + 1} / 06`)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <main class="portfolio">
    <NavBar :current="current" :isMobileNavOpen="isMobileNavOpen" :sections="sections" @go-to="goTo" @update:isMobileNavOpen="isMobileNavOpen = $event"/>

    <!-- 01 HOME -->
      <HomePage :progress="progress" @go-to="goTo"/>
    <!-- 02 ABOUT -->
    <AboutMe :progress="progress" @go-to="goTo"/>

    <!-- 03 SKILLS -->
    <Skill :progress="progress" @go-to="goTo"/>

    <!-- 04 EXPERIENCE -->
    <Experience :progress="progress" @go-to="goTo"/>

    <!-- 05 PROJECTS -->
    <Projects :progress="progress" @go-to="goTo"/>

    <!-- 06 CONTACT -->
    <Contact :progress="progress" />
  </main>
</template>