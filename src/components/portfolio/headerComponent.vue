<template>
    <header class="header" :class="{ 'hide-header': isHeaderHidden }">
      <nav class="navbar-header">
        <div @click="scrollToSection('personal-details')" class="logo">A</div>
        <div class="burger-menu" @click="toggleMenu">☰</div>
        <div class="nav-items" :class="{ active: isMenuOpen }">
            <div class="theme-btn-class">
                <a class="theme-button" @click.prevent="changeTheme">
                    <transition name="fade" mode="out-in">
                    <span class="icon" :key="theme">
                        <svg v-if="theme === 'light'"
                            fill="#475569"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                        </svg>
                        <svg v-else
                            fill="#64ffda"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMinYMin"
                            class="jam jam-sun">
                        <path
                            d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2zm16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM5.757 14.243a1 1 0 0 1 0 1.414L4.343 17.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM4.343 2.929l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.343A1 1 0 0 1 4.343 2.93zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414z"/>
                        </svg>
                    </span>
                    </transition>
                </a>
            </div>
            <ol>
                <li><a @click.prevent="scrollToSection('about')" href="#about">About</a></li>
                <li><a @click.prevent="scrollToSection('experience')" href="#experience">Experience</a></li>
                <li><a @click.prevent="scrollToSection('other')" href="#other">Other</a></li>
                <li><a @click.prevent="scrollToSection('contact')" href="#contact">Contact</a></li>
            </ol>
            <div>
                <a class="resume-button" href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isHeaderHidden = ref(false);
  const isMenuOpen = ref(false);
  let lastScrollY = 0;
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      isMenuOpen.value = false;
    }
  };

  const theme = ref(localStorage.getItem('theme') || 'light');

  const changeTheme=()=>{
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme.value);
    document.body.classList.toggle('light-theme', theme.value === 'light');
    localStorage.setItem('theme', theme.value);
  }
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const checkInitialScroll = () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  };
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      isHeaderHidden.value = true;
    } else {
      isHeaderHidden.value = false;
    }
    lastScrollY = currentScrollY;
  };
  
  onMounted(() => {
    checkInitialScroll();
    window.addEventListener('scroll', handleScroll);
    document.body.classList.toggle('light-theme', theme.value === 'light');
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style lang="scss">
  @import '../../assets/styles/headerStyle.scss'; 
  @import '../../assets/styles/variables';
  </style>
  