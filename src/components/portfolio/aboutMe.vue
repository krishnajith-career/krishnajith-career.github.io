<template>
    <section class="about_me" data-sr-id="0" id="about">
        <h2 class="numbered-heading">About Me</h2>
        <div class="inner">
            <div class="about-writing">
                <div>
                    <div>
                        <p>Results-driven Vue.js Developer and Level 2 Software Developer specializing in building high-performance web applications. </p>
                        <p>Proficient in Vue.js, PHP, MySQL, and RESTful API development, with expertise in scalable architectures, CI/CD pipelines, and agile development.</p>
                        <p>Skilled in team leadership, software optimization, cross-functional collaboration, and troubleshooting complex systems to ensure seamless functionality and efficiency. 
                            Passionate about innovation, automation, continuous learning, and delivering secure, efficient, and user-friendly software solutions that drive business success.</p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </div>
                </div>
                <ul class="skills-list" >
                    <li style="text-align:left" v-for="skill in skills" :key="skill">{{ skill }}</li>
                </ul>
            </div>
            <div class="about-image">
                <div class="wrapper">
                    <div class="img image-wrapper">
                        <div style="max-width: 500px;display: block;">
                            <img :src="currentImage" alt="My Image" style="max-width: 100%; display: block; position: static;">
                            <div aria-hidden="true" style="opacity: 0;transition: opacity 500ms linear 0s;background-color: rgb(232, 232, 232);position: absolute;inset: 0px;object-fit: cover;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'aboutMe',
    data () {
        return {
            skills : ['Vue.js', 'Vuex', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'JQuery','MySQL','PHP','RESTful APIs','AWS','Apache',
             'Git', 'GitHub', 'Redmine', 'Postman','Code reviews','Unit Testing' ,'CI/CD (Jenkins, GitHub Actions)',
            'Agile & Scrum methodologies','Debugging tools (Xdebug)'
            ],
            images: [
                require('@/assets/images/me.jpg'),
                require('@/assets/images/me1.jpg'),
                require('@/assets/images/me2.jpg'),
                require('@/assets/images/me3.jpg'),
                require('@/assets/images/me4.jpg'),
                require('@/assets/images/me5.jpg')
            ],
            currentImage: require('@/assets/images/me3.jpg') 
        }
    },
    mounted() {
        this.changeImage();
    },
    methods: {
        changeImage() {
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * this.images.length);
            this.currentImage = this.images[randomIndex];
        }, 10000); 
        }
    }
  }
  </script>
  
  <style lang="scss">
  @import '../../assets/styles/mainPage.scss'; 
  @import '../../assets/styles/variables';
  </style>
