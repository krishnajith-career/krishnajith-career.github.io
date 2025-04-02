<template>
    <section class="other" data-sr-id="2" id="other">
        <h2 class="numbered-heading ">some things i have clicked</h2>
        <ul class="travel-list">
          <li class="travel-list-obj">
            <div class="travel-content">
              <div>
                <div class="travel-description">
                  <p>I believe the best camera is the one you always have with you. With my smartphone in hand, I capture spontaneous moments that tell powerful stories—whether it’s the play of light on a city street, the vibrant colors of nature, or a fleeting expression that speaks a thousand words. Every click is a chance to turn the ordinary into the extraordinary.</p>
                </div>
              </div>
            </div>
            <div class="travel-image">
              <a>
                <div class="img image-wrapper">
                    <div style="max-width: 700px; display: block;">
                        <img v-lazy="currentLandscapeImage" alt="My Image" style="max-width: 100%; display: block; position: static;">
                        <div aria-hidden="true" style="opacity: 0;transition: opacity 500ms linear 0s;background-color: rgb(232, 232, 232);position: absolute;inset: 0px;object-fit: cover;"></div>
                    </div>
                </div>
              </a>
            </div>
          </li>
          
        </ul>
        
    </section>
  </template>
  
  <script>
  export default {
    name: 'contactDetails',
    data () {
        return {
            currentLandscapeImage: require('@/assets/images/travel/landscape/img1.jpg'),
            landscapeImages: [
              require('@/assets/images/travel/landscape/img1.jpg'),
              require('@/assets/images/travel/landscape/img2.jpg'),
              require('@/assets/images/travel/landscape/img3.jpg'),
              require('@/assets/images/travel/landscape/img4.jpg'),
              require('@/assets/images/travel/landscape/img5.jpg'),
              require('@/assets/images/travel/landscape/img6.jpg')
            ], 
        }
    },
    mounted() {
        this.changeImage();
    },
    methods: {
        changeImage() {
        setInterval(() => {
            const randomLandscapeIndex = Math.floor(Math.random() * this.landscapeImages.length);
            this.currentLandscapeImage = this.landscapeImages[randomLandscapeIndex];
        }, 10000); 
        }
    }
  }
  </script>
  
  <style lang="scss">
  @import '../../assets/styles/mainPage.scss'; 
  @import '../../assets/styles/variables';
  </style>