<script setup>
import { ref } from 'vue'
import { useBackground } from '../composables/useBackground'
import ExperienceModal from './ExperienceModal.vue'

const { background } = useBackground()

const props = defineProps({
  progress: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['goTo'])

const selectedExperience = ref(null)

const experiences = [
  {
    id: 1,
    year: 'May 2025 - May 2026',
    role: 'Senior Software Developer',
    company: 'Prodapt Solutions Pvt. Ltd',
    location: 'Chennai, Tamil Nadu',
    type: 'Full Time',
    icon: 'P',

    overview:
      'Developed and maintained enterprise full-stack applications using PHP, Vue.js, React.js, and Node.js. Built RESTful APIs, implemented authentication and authorization, developed AI-driven features, and contributed to CI/CD releases and production deployments.',

    contributions: [
      'Developed and maintained enterprise full-stack applications.',
      'Built and integrated RESTful APIs.',
      'Implemented authentication and authorization features.',
      'Developed AI-driven application features.',
      'Contributed to CI/CD releases and production deployments.'
    ],

    technologies: [
      { name: 'Vue.js', rating: 90 },
      { name: 'PHP', rating: 90 },
      { name: 'REST API', rating: 88 },
      { name: 'MySQL', rating: 82 },
      { name: 'Node.js', rating: 75 },
      { name: 'React.js', rating: 70 },
      { name: 'CI/CD', rating: 82 },
      { name: 'AWS', rating: 75 }
    ],

    highlights: [
      'Full-Stack Development',
      'REST API Development',
      'AI Features',
      'Authentication',
      'CI/CD'
    ]
  },

  {
    id: 2,
    year: 'Nov 2021 - Mar 2025',
    role: 'Level-2 Software Developer',
    company: 'Linways Technologies Pvt. Ltd',
    location: 'Kochi, Kerala',
    type: 'Full Time',
    icon: 'L',

    overview:
      'Designed and developed scalable Academic ERP modules using PHP, Vue.js, JavaScript, MySQL and MVC architecture. Led frontend modernization, optimized application performance, integrated RESTful and third-party services, and established coding standards and CI/CD practices.',

    contributions: [
      'Designed and developed scalable Academic ERP modules.',
      'Led frontend modernization using Vue.js.',
      'Built reusable frontend components and application architecture.',
      'Optimized application performance and MySQL queries.',
      'Integrated RESTful and third-party services.',
      'Established coding standards and CI/CD practices.',
      'Reviewed code and supported junior developers.'
    ],

    technologies: [
      { name: 'Vue.js', rating: 95 },
      { name: 'Vuex', rating: 90 },
      { name: 'Pinia', rating: 88 },
      { name: 'PHP', rating: 92 },
      { name: 'MySQL', rating: 88 },
      { name: 'REST API', rating: 90 },
      { name: 'AWS S3', rating: 78 },
      { name: 'Jenkins', rating: 78 },
      { name: 'GitHub Actions', rating: 82 }
    ],

    highlights: [
      'Frontend Modernization',
      'Academic ERP',
      'Performance Optimization',
      'API Integration',
      'Code Reviews',
      'CI/CD'
    ]
  },

  {
    id: 3,
    year: 'Jul 2020 - Nov 2021',
    role: 'Level-1 Software Developer',
    company: 'Linways Technologies Pvt. Ltd',
    location: 'Kochi, Kerala',
    type: 'Full Time',
    icon: 'L',

    overview:
      'Developed Exam and Academics modules for the Academic ERP using Vue.js, PHP, MySQL and JavaScript. Built reusable Vue components, integrated RESTful APIs, developed PHP backend modules, implemented queue-based SMS processing, and optimized application performance.',

    contributions: [
      'Developed Exam and Academics modules for the Academic ERP.',
      'Built reusable Vue.js components.',
      'Integrated RESTful APIs.',
      'Developed PHP backend modules.',
      'Implemented queue-based SMS processing.',
      'Optimized application performance.',
      'Worked with MySQL database operations.'
    ],

    technologies: [
      { name: 'Vue.js', rating: 88 },
      { name: 'JavaScript', rating: 88 },
      { name: 'PHP', rating: 85 },
      { name: 'MySQL', rating: 82 },
      { name: 'REST API', rating: 82 },
      { name: 'HTML5', rating: 90 },
      { name: 'CSS3', rating: 88 },
      { name: 'MVC', rating: 82 }
    ],

    highlights: [
      'Academic ERP',
      'Reusable Components',
      'API Integration',
      'PHP Development',
      'SMS Processing'
    ]
  }
]

/* =========================================================
   MOBILE EXPERIENCE CAROUSEL
========================================================= */

const mobileExperienceIndex = ref(0)

const nextExperience = () => {
  mobileExperienceIndex.value =
    (mobileExperienceIndex.value + 1) % experiences.length
}

const previousExperience = () => {
  mobileExperienceIndex.value =
    (mobileExperienceIndex.value - 1 + experiences.length) %
    experiences.length
}

const goToExperience = (index) => {
  mobileExperienceIndex.value = index
}

/* =========================================================
   EXPERIENCE MODAL
========================================================= */

const openExperience = (experience) => {
  selectedExperience.value = experience
}

const closeExperience = () => {
  selectedExperience.value = null
}
</script>

<template>

  <section
    id="experience"
    class="scene experience"
    :style="background('portfolio-experience-background')"
  >

    <div class="scene-inner experience-layout">

      <!-- =========================================
           LEFT CONTENT
      ========================================== -->

      <div class="copy experience-intro">

        <p class="eyebrow">
          <span>EXPERIENCE</span>
        </p>

        <h2>
          A JOURNEY<br />
          OF GROWTH
        </h2>

        <p class="lead">
          From building my foundation to leading
          <br class="desktop" />
          impactful projects, every role has shaped
          <br class="desktop" />
          me into a better developer.
        </p>

        <button
          class="outline-btn"
          type="button"
          @click="emit('goTo', 4)"
        >
          VIEW FULL EXPERIENCE
          <span>→</span>
        </button>

      </div>


      <!-- =========================================
           EXPERIENCE TIMELINE
      ========================================== -->

      <div class="experience-timeline">

        <div class="experience-timeline-line"></div>

        <article
          v-for="(item, index) in experiences"
          :key="item.id"
          class="experience-item"
          :class="{
            'mobile-active': index === mobileExperienceIndex
          }"
        >

          <!-- Timeline node -->
          <button
            class="experience-node"
            type="button"
            @click="openExperience(item)"
            :aria-label="`View ${item.role}`"
          >
            <span></span>
          </button>


          <!-- Experience card -->
          <button
            class="experience-card"
            type="button"
            @click="openExperience(item)"
          >

            <div class="experience-card-main">

              <div class="experience-company-icon">
                {{ item.icon }}
              </div>

              <div class="experience-info">

                <h3>
                  {{ item.role }}
                </h3>

                <p>
                  {{ item.company }}

                  <span class="company-separator">
                    •
                  </span>

                  {{ item.type }}
                </p>

              </div>

            </div>


            <div class="experience-actions">

              <div class="experience-date">

                <span class="calendar-icon"></span>

                {{ item.year }}

              </div>

              <span class="experience-arrow">
                ↗
              </span>

            </div>

          </button>

        </article>

      </div>


      <!-- =========================================
           MOBILE EXPERIENCE CONTROLS
      ========================================== -->

      <div class="experience-mobile-controls">

        <button
          class="experience-mobile-arrow"
          type="button"
          aria-label="Previous experience"
          @click="previousExperience"
        >
          ←
        </button>


        <div class="experience-mobile-dots">

          <button
            v-for="(item, index) in experiences"
            :key="item.id"
            type="button"
            class="experience-mobile-dot"
            :class="{
              active: index === mobileExperienceIndex
            }"
            :aria-label="`Show ${item.role}`"
            @click="goToExperience(index)"
          ></button>

        </div>


        <button
          class="experience-mobile-arrow"
          type="button"
          aria-label="Next experience"
          @click="nextExperience"
        >
          →
        </button>

      </div>


      <!-- =========================================
           COUNTER
      ========================================== -->

      <div class="counter">
        {{ props.progress }}
      </div>

    </div>


    <!-- =========================================
         EXPERIENCE MODAL
    ========================================== -->

    <ExperienceModal
      v-if="selectedExperience"
      :experience="selectedExperience"
      @close="closeExperience"
    />

  </section>

</template>


<style scoped>

/* =========================================================
   EXPERIENCE
========================================================= */

.experience-layout {
  display: flex;
  align-items: center;
  gap: 6%;
}

.experience-intro {
  width: 32%;
  flex-shrink: 0;
}


/* =========================================================
   TIMELINE
========================================================= */

.experience-timeline {
  position: relative;

  width: 62%;
  max-width: 850px;

  margin-left: auto;

  padding-left: 34px;
}

.experience-timeline-line {
  position: absolute;

  left: 0;
  top: 24px;
  bottom: 24px;

  width: 1px;

  background: rgba(255, 255, 255, 0.32);
}


/* =========================================================
   ITEM
========================================================= */

.experience-item {
  position: relative;

  margin-bottom: 14px;
}


/* =========================================================
   NODE
========================================================= */

.experience-node {
  position: absolute;

  left: -14px;
  top: 38px;

  width: 28px;
  height: 28px;

  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.65);

  border-radius: 50%;

  background: #050505;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  z-index: 5;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.experience-node span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.75);
}

.experience-node:hover {
  border-color: #fff;

  transform: scale(1.12);

  box-shadow:
    0 0 15px rgba(255, 255, 255, 0.18);
}


/* =========================================================
   CARD
========================================================= */

.experience-card {
  position: relative;

  width: 100%;

  min-height: 105px;

  padding: 25px 28px;

  background: rgba(0, 0, 0, 0.70);

  border: 1px solid rgba(255, 255, 255, 0.06);

  color: #fff;

  text-align: left;

  cursor: pointer;

  font-family: inherit;

  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

.experience-card:hover {
  background: rgba(0, 0, 0, 0.84);

  border-color: rgba(255, 255, 255, 0.18);

  transform: translateX(4px);
}


/* =========================================================
   CARD MAIN
========================================================= */

.experience-card-main {
  display: flex;
  align-items: center;

  gap: 20px;

  padding-right: 220px;
}


/* =========================================================
   COMPANY ICON
========================================================= */

.experience-company-icon {
  flex-shrink: 0;

  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.62);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.035);

  color: #fff;

  font-size: 18px;
  font-weight: 500;
}


/* =========================================================
   INFO
========================================================= */

.experience-info {
  min-width: 0;
}

.experience-info h3 {
  margin: 0 0 7px;

  color: #fff;

  font-size: 17px;

  line-height: 1.25;

  font-weight: 600;
}

.experience-info p {
  margin: 0;

  color: rgba(255, 255, 255, 0.52);

  font-size: 11px;

  line-height: 1.4;
}

.company-separator {
  margin: 0 5px;

  color: rgba(255, 255, 255, 0.3);
}


/* =========================================================
   ACTIONS
========================================================= */

.experience-actions {
  position: absolute;

  right: 24px;
  top: 33px;

  display: flex;
  align-items: center;

  gap: 22px;
}

.experience-date {
  display: flex;
  align-items: center;

  gap: 9px;

  color: rgba(255, 255, 255, 0.72);

  font-size: 11px;

  white-space: nowrap;
}


/* =========================================================
   CALENDAR
========================================================= */

.calendar-icon {
  position: relative;

  width: 15px;
  height: 14px;

  border: 1px solid rgba(255, 255, 255, 0.78);
}

.calendar-icon::before {
  content: "";

  position: absolute;

  left: -1px;
  right: -1px;

  top: 3px;

  height: 1px;

  background: rgba(255, 255, 255, 0.78);
}

.calendar-icon::after {
  content: "";

  position: absolute;

  left: 3px;
  top: -4px;

  width: 1px;
  height: 6px;

  background: #fff;

  box-shadow: 7px 0 0 #fff;
}


/* =========================================================
   CARD ARROW
========================================================= */

.experience-arrow {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.28);

  border-radius: 50%;

  color: #fff;

  font-size: 20px;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.experience-card:hover .experience-arrow {
  background: #fff;

  color: #000;

  border-color: #fff;
}


/* =========================================================
   MOBILE CONTROLS
========================================================= */

.experience-mobile-controls {
  display: none;
}

.experience-mobile-dots {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7px;
}

.experience-mobile-dot {
  width: 6px;
  height: 6px;

  padding: 0;

  border: 0;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.28);

  cursor: pointer;

  transition:
    width 0.25s ease,
    background 0.25s ease;
}

.experience-mobile-dot.active {
  width: 22px;

  border-radius: 10px;

  background: #fff;
}


/* =========================================================
   MOBILE ARROWS
========================================================= */

.experience-mobile-arrow {
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.28);

  border-radius: 50%;

  background: rgba(0, 0, 0, 0.25);

  color: #fff;

  font-size: 14px;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.experience-mobile-arrow:hover {
  background: #fff;

  color: #000;

  transform: scale(1.05);
}


/* =========================================================
   COUNTER
========================================================= */

.experience .counter {
  left: 5%;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

  .experience-layout {
    gap: 4%;
  }

  .experience-intro {
    width: 34%;
  }

  .experience-timeline {
    width: 62%;

    padding-left: 28px;
  }

  .experience-card {
    padding: 22px 20px;
  }

  .experience-card-main {
    padding-right: 0;
  }

  .experience-actions {
    position: static;

    margin-top: 18px;

    justify-content: space-between;
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 640px) {

  .experience-layout {
    display: block;
  }


  /* =========================================
     INTRO
  ========================================= */

  .experience-intro {
    width: auto;

    margin-top: 4vh;
  }


  /* =========================================
     TIMELINE
  ========================================= */

  .experience-timeline {
    width: calc(100% - 12px);

    margin: 30px 0 0 0px;

    padding-left: 0;
  }


  /* Hide vertical timeline on mobile */

  .experience-timeline-line {
    display: none;
  }


  /* =========================================
     EXPERIENCE ITEMS
  ========================================= */

  .experience-item {
    display: none;

    margin-bottom: 0;
  }


  /* Show only selected experience */

  .experience-item.mobile-active {
    display: block;
  }


  /* Hide timeline node */

  .experience-node {
    display: none;
  }


  /* =========================================
     EXPERIENCE CARD
  ========================================= */

  .experience-card {
    width: 100%;

    min-height: 145px;

    padding: 18px 16px;
  }

  .experience-card-main {
    gap: 12px;

    padding-right: 0;
  }


  /* =========================================
     COMPANY ICON
  ========================================= */

  .experience-company-icon {
    width: 42px;
    height: 42px;

    font-size: 14px;
  }


  /* =========================================
     EXPERIENCE INFO
  ========================================= */

  .experience-info h3 {
    font-size: 12px;

    line-height: 1.3;

    margin-bottom: 5px;
  }

  .experience-info p {
    font-size: 8px;
  }


  /* =========================================
     ACTIONS
  ========================================= */

  .experience-actions {
    position: static;

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 15px;

    gap: 10px;
  }

  .experience-date {
    font-size: 8px;
  }

  .experience-arrow {
    width: 31px;
    height: 31px;

    font-size: 16px;
  }


  /* =========================================
     MOBILE PAGINATION
  ========================================= */

  .experience-mobile-controls {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 18px;

    margin-top: 16px;
  }


  .experience-mobile-dots {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 7px;
  }


  .experience-mobile-dot {
    width: 6px;
    height: 6px;

    padding: 0;

    border: 0;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.3);
  }


  .experience-mobile-dot.active {
    width: 22px;

    border-radius: 10px;

    background: #fff;
  }


  /* =========================================
     MOBILE NAVIGATION ARROWS
  ========================================= */

  .experience-mobile-arrow {
    width: 28px;
    height: 28px;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 0;

    border: 1px solid rgba(255, 255, 255, 0.28);

    border-radius: 50%;

    background: rgba(0, 0, 0, 0.25);

    color: #fff;

    font-size: 14px;
  }


  .experience-mobile-arrow:active {
    background: #fff;

    color: #000;

    transform: scale(0.95);
  }


  /* =========================================
     COUNTER
  ========================================= */

  .experience .counter {
    left: 28px;
  }

}
</style>