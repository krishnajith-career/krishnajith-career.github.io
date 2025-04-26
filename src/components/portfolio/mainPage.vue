<template>
  <div>
    <main class="fillHeight firstpage">
      <personal-details />
      <about-me />
      <experience-details />
      <work-and-other />
      <contact-details />
      <footer class="footer-class">
        <social-media-mobile />
        <div class="footer-div">
          <div>Designed & Built by Krishnajith</div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import AboutMe from './aboutMe.vue'
import PersonalDetails from './personalDetails.vue'
import ExperienceDetails from './experienceDetails.vue'
import WorkAndOther from './workAndOther.vue'
import ContactDetails from './contactDetails.vue'
import SocialMediaMobile from './socialMediaMobile.vue'

</script>

<style lang="scss">
@import '../../assets/styles/mainPage.scss';
@import '../../assets/styles/variables';
</style> 
