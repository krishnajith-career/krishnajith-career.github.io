<template>
    <div class="footer-social-media">
        <ul>
            <li>
            <a href="https://github.com/krishnajith-career" aria-label="GitHub" target="_blank" rel="noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="feather feather-github"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    role="img">
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            </a>
            </li>
            <li>
                <a href="https://www.instagram.com/krishnajith_unnikrishnan/" aria-label="Instagram" target="_blank" rel="noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="feather feather-instagram"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        role="img">
                        <title>Instagram</title>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" />
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://x.com/anhsirk6699" aria-label="Twitter" target="_blank" rel="noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="feather feather-twitter"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        role="img">
                        <title>Twitter</title>
                        <path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4 2a9 9 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.5 0a4.48 4.48 0 0 0-4.5 4.5c0 .35.04.7.1 1.03A12.74 12.74 0 0 1 1.67 1.16a4.48 4.48 0 0 0-.6 2.26c0 1.56.79 2.93 1.98 3.73A4.48 4.48 0 0 1 .96 6.8v.06c0 2.17 1.54 4 3.58 4.42A4.48 4.48 0 0 1 2.2 14a4.48 4.48 0 0 0 4.18 3.1A9 9 0 0 1 0 18.4a12.74 12.74 0 0 0 6.9 2.02c8.27 0 12.78-6.85 12.78-12.78 0-.2 0-.4-.01-.6A9.12 9.12 0 0 0 23 3z" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/krishnajith-career/" aria-label="Linked In" target="_blank" rel="noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-linkedin"
                        role="img">
                        <title>LinkedIn</title>
                        <path d="M16 8a6 6 0 0 1 6 6v8h-4v-8a2 2 0 0 0-4 0v8h-4v-8a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>
            </li>
            <li>
                <a  @click.prevent="changeTheme">
                    <transition name="fade" mode="out-in">
                    <span class="icon" :key="theme">
                        <svg v-if="theme === 'light'"
                            fill="#475569"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                        </svg>
                        <svg v-else
                            fill="#64ffda"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const theme = ref(localStorage.getItem('theme') || 'dark');
    const changeTheme=()=>{
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme.value);
        document.body.classList.toggle('light-theme', theme.value === 'light');
        localStorage.setItem('theme', theme.value);
    }
  defineOptions({
    name: 'socialMedia'
  })
</script>

<style lang="scss">
@import '../../assets/styles/mainPage.scss'; 
@import '../../assets/styles/variables';
</style>