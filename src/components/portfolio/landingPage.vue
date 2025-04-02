<template>
    <div id="landing-page" >
        <div v-if="isLoading" class="loading-screen">
            <div class="initial-logo">
                <span class="logo-letter">A</span>
            </div>
        </div>
        <div v-else>
            <headerComponent></headerComponent>
            <socialMedia></socialMedia>
            <mainPage></mainPage>
        </div>
    </div>
</template>

<script>
import headerComponent from './headerComponent.vue'
import socialMedia from './socialMedia.vue'
import mainPage from './mainPage.vue'




export default {
    data() {
        return {
            isLoading: true
        }
    },
    methods: {
        toggleTheme() {
            this.isLightMode = !this.isLightMode;
        }
    },
    components: {   
        headerComponent,
        socialMedia,
        mainPage
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1500); 
    }
}
</script>