<template>
  <div class="">
      <main class="fillHeight firstpage">
        <personal-details></personal-details>
        <about-me></about-me>
        <experience-details></experience-details>
        <work-and-other></work-and-other>
        <contact-details></contact-details>
        <footer class="footer-class">
          <social-media-mobile></social-media-mobile>
          <div class="footer-div">
              <div>Designed & Built by Krishnajith</div>
          </div>
        </footer>
      </main>
      
  </div>
</template>

<script>
import AboutMe from './aboutMe.vue'
import personalDetails from './personalDetails.vue'
import experienceDetails from './experienceDetails.vue'
import WorkAndOther from './workAndOther.vue'
import contactDetails from './contactDetails.vue'
import socialMediaMobile from './socialMediaMobile.vue'
export default {
  components: { personalDetails, AboutMe, experienceDetails, WorkAndOther, contactDetails, socialMediaMobile },
  name: 'mainPage'}
</script>

<style lang="scss">
@import '../../assets/styles/mainPage.scss'; 
@import '../../assets/styles/variables';
</style>