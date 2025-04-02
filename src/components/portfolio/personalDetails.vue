<template>
    <section class="personal_details" id="personal-details">
        <div style="transition-delay: 100ms;">
            <h1>Hi, my name is</h1>
        </div>
        <div style="transition-delay: 200ms;">
            <h2 class="big-heading">{{ name }}</h2>
        </div>
        <div style="transition-delay: 300ms;">
            <h3 class="big-heading">I build things for the web.</h3>
        </div>
        <div style="transition-delay: 400ms;">
            <p>
                Results-driven Full Stack Web Developer proficient in Vue.js, 
                PHP, RESTful APIs, and AWS, delivering scalable, 
                responsive web solutions with a focus on best practices and innovation.
            </p>
        </div>
    </section>  
</template>
  
  <script>
  export default {
    name: 'personalDetails',
    data () {
        return {
            name : "Krishnajith Unnikrishnan"
        }
    },
  }
  </script>
  
  <style lang="scss">
  @import '../../assets/styles/mainPage.scss'; 
  @import '../../assets/styles/variables';
  </style>