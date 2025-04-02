<template>
    <header class="header" :class="{ 'hide-header': isHeaderHidden }">
        <nav class="navbar-header">
        <div @click="scrollToSection('personal-details')" class="logo">A</div>
        <div class="burger-menu" @click="toggleMenu">☰</div>
        <div class="nav-items" :class="{ active: isMenuOpen }">
            <ol>
            <li><a @click="scrollToSection('about')" href="#about">About</a></li>
            <li><a @click="scrollToSection('experience')" href="#experience">Experience</a></li>
            <li><a @click="scrollToSection('other')" href="#other">Other</a></li>
            <li><a @click="scrollToSection('contact')" href="#contact">Contact</a></li>
            </ol>
            <div>
            <a class="resume-button" href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'headerComponent',
    data() {
        return {
            lastScrollY: 0, 
            isHeaderHidden: false, 
            isMenuOpen: false,
        };
    },
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
                this.isMenuOpen = false;
            }
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        checkInitialScroll() {
            const hash = window.location.hash.substring(1); 
            if (hash) {
                this.scrollToSection(hash);
            }
        },
        handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
                this.isHeaderHidden = true;
            } else {
                this.isHeaderHidden = false;
            }
            this.lastScrollY = currentScrollY; 
        }
    },
    mounted() {
        this.checkInitialScroll();
        window.addEventListener('scroll', this.handleScroll); 
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll); 
    }
}
</script>

<style lang="scss">
@import '../../assets/styles/headerStyle.scss'; 
@import '../../assets/styles/variables';
</style>