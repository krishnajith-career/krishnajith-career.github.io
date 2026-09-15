<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useBackground } from '../composables/useBackground'
import {
  ArrowLeft,
  ArrowRight
} from 'lucide-vue-next'

import ProjectModal from './ProjectModal.vue'

const { background } = useBackground()

defineProps({
  progress: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['goTo'])

/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [
  {
    title: 'Academic Management System',
    image: 'academic',
    text: 'A scalable academic ERP platform for managing institutional operations.',
    tags: ['Vue.js', 'PHP', 'MySQL'],

    overview:
      'A comprehensive academic management platform developed for educational institutions to manage academic workflows, course creation, examinations, controller activities, and related institutional operations.',

    technologies: [
      'Vue.js',
      'PHP',
      'MySQL',
      'JavaScript',
      'RESTful APIs',
      'HTML5',
      'CSS3',
      'MVC Architecture'
    ],

    contributions: [
      'Developed and maintained core academic ERP modules.',
      'Developed responsive interfaces using Vue.js.',
      'Created reusable Vue.js components for multiple workflows.',
      'Developed PHP backend functionality using MVC architecture.',
      'Designed and consumed RESTful APIs.',
      'Implemented academic business workflows and validations.',
      'Optimized complex MySQL queries and backend logic.',
      'Improved application performance through code refactoring and optimization.',
      'Participated in code reviews and maintained coding standards.'
    ],

    challenges: [
      'Handling complex academic business workflows.',
      'Managing large volumes of academic data.',
      'Maintaining consistency between interconnected modules.',
      'Optimizing database queries for large datasets.',
      'Modernizing existing modules while maintaining existing functionality.'
    ],

    impact:
      'Improved academic workflow efficiency, application performance, maintainability, and overall user experience.'
  },

  {
    title: 'Digital Valuation System',
    image: 'valuation',
    text: 'A digital platform designed to automate assessment and valuation workflows.',
    tags: ['Vue.js', 'PHP', 'AWS'],

    overview:
      'A digital valuation platform designed to automate assessment and evaluation workflows, reducing manual effort while improving accuracy, scalability, and reliability.',

    technologies: [
      'Vue.js',
      'PHP',
      'MySQL',
      'RESTful APIs',
      'AWS',
      'AWS S3',
      'Jenkins',
      'GitHub Actions',
      'CI/CD'
    ],

    contributions: [
      'Developed frontend interfaces for digital valuation workflows.',
      'Integrated Vue.js modules with backend REST APIs.',
      'Created reusable UI components.',
      'Implemented application workflows for digital assessment.',
      'Worked with AWS infrastructure and AWS S3 storage.',
      'Implemented and maintained CI/CD pipelines.',
      'Supported application deployment and production releases.',
      'Optimized workflows and application performance.',
      'Participated in debugging and production issue resolution.'
    ],

    challenges: [
      'Automating manual assessment and valuation processes.',
      'Handling large amounts of evaluation data.',
      'Maintaining accuracy and consistency of evaluation information.',
      'Ensuring reliable processing and data storage.',
      'Building scalable workflows for enterprise usage.'
    ],

    impact:
      'Reduced manual effort and errors while improving evaluation efficiency, scalability, reliability, and overall workflow performance.'
  },

  {
    title: 'Exam Controller System',
    image: 'exam',
    text: 'An enterprise examination management system supporting controller workflows.',
    tags: ['React.js', 'Vue.js', 'PHP', 'Node.js', 'MySQL'],

    overview:
      'An examination management system designed to support examination controller workflows, academic processes, and large-scale examination data management across multiple application layers.',

    technologies: [
      'React.js',
      'Vue.js',
      'PHP',
      'Node.js',
      'MySQL',
      'RESTful APIs',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    contributions: [
      'Developed examination-related frontend modules using Vue.js and React.js.',
      'Implemented backend functionality using PHP and Node.js.',
      'Integrated frontend applications with RESTful APIs.',
      'Worked with MySQL for examination and academic data management.',
      'Implemented business rules and validation for examination workflows.',
      'Developed reusable UI components.',
      'Handled API integration between different application layers.',
      'Debugged and resolved application issues across frontend and backend.',
      'Optimized application performance and database queries.'
    ],

    challenges: [
      'Handling complex examination workflows and business rules.',
      'Managing large volumes of examination-related data.',
      'Working across multiple frontend and backend technologies.',
      'Maintaining consistent data between different application layers.',
      'Ensuring reliable processing of critical examination operations.'
    ],

    impact:
      'Improved examination workflow management and provided a scalable full-stack solution supporting complex controller and academic operations.'
  },

  {
    title: 'Razorpay Payment Gateway Integration',
    image: 'payment',
    text: 'Secure Razorpay payment integration within the Academic ERP platform.',
    tags: ['Razorpay', 'PHP', 'Vue.js', 'REST API'],

    overview:
      'A payment gateway integration implemented within the Academic ERP to enable secure online payments and streamline payment processing for academic services.',

    technologies: [
      'Razorpay',
      'PHP',
      'Vue.js',
      'MySQL',
      'RESTful APIs',
      'JavaScript',
      'Payment Gateway',
      'AWS'
    ],

    contributions: [
      'Integrated Razorpay payment gateway into the Academic ERP.',
      'Developed frontend payment workflows using Vue.js.',
      'Implemented backend payment processing using PHP.',
      'Integrated Razorpay APIs with the application backend.',
      'Handled payment request and response processing.',
      'Implemented transaction validation and status handling.',
      'Integrated payment information with existing ERP workflows.',
      'Handled payment failures and transaction-related scenarios.',
      'Worked on debugging and resolving payment integration issues.'
    ],

    challenges: [
      'Integrating an external payment gateway with an existing ERP platform.',
      'Handling successful, failed, and interrupted transactions.',
      'Maintaining consistency between payment status and ERP records.',
      'Ensuring secure communication between the application and payment gateway.',
      'Handling asynchronous payment responses and transaction validation.'
    ],

    impact:
      'Enabled seamless online payment processing within the Academic ERP and reduced manual payment handling while improving the overall user experience.'
  },

  {
    title: 'Seamless Cross-Stack Login',
    image: 'authentication',
    text: 'Single login experience across applications built with different technology stacks.',
    tags: ['Java', 'Node.js', 'React.js', 'PHP'],

    overview:
      'A cross-application authentication solution designed to provide a seamless login experience across multiple enterprise applications built using different technology stacks, including Java, Node.js, React.js, and PHP.',

    technologies: [
      'Java',
      'Java Microservices',
      'Node.js',
      'React.js',
      'PHP',
      'RESTful APIs',
      'Authentication',
      'Authorization',
      'JWT',
      'Session Management'
    ],

    contributions: [
      'Implemented authentication integration across applications using different technology stacks.',
      'Worked with Java-based microservices for authentication-related functionality.',
      'Integrated authentication workflows with Node.js applications.',
      'Integrated frontend authentication flows in React.js applications.',
      'Implemented authentication communication with PHP applications.',
      'Worked with token-based authentication and session management.',
      'Integrated REST APIs between authentication services and applications.',
      'Handled authentication and authorization scenarios.',
      'Debugged cross-application authentication issues.'
    ],

    challenges: [
      'Maintaining a consistent authentication experience across different technology stacks.',
      'Integrating Java, Node.js, React.js, and PHP applications.',
      'Managing authentication state across multiple applications.',
      'Handling token and session management between systems.',
      'Ensuring secure communication between authentication services and applications.'
    ],

    impact:
      'Provided a seamless authentication experience across multiple enterprise applications while reducing repeated login requirements and improving cross-application usability.'
  }
]


/* =========================================================
   PROJECT IMAGES
   ========================================================= */

const projectImage = {
  academic: 'portfolio-academic.webp',
  valuation: 'portfolio-valuation.webp',
  exam: 'portfolio-exam.webp',
  payment: 'portfolio-payment.webp',
  authentication: 'portfolio-authentication.webp'
}


/* =========================================================
   PAGINATION
   ========================================================= */

const currentPage = ref(0)
const isMobile = ref(false)

const projectsPerPage = computed(() => {
  return isMobile.value ? 1 : 3
})

const totalPages = computed(() => {
  return Math.ceil(
    projects.length / projectsPerPage.value
  )
})

const visibleProjects = computed(() => {
  const start =
    currentPage.value * projectsPerPage.value

  return projects.slice(
    start,
    start + projectsPerPage.value
  )
})


/* =========================================================
   MODAL
   ========================================================= */

const selectedProject = ref(null)

const openProject = (project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}


/* =========================================================
   PAGINATION CONTROLS
   ========================================================= */

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}

const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const goToPage = (index) => {
  currentPage.value = index
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

const checkMobile = () => {
  const mobile = window.innerWidth <= 640

  if (mobile !== isMobile.value) {
    isMobile.value = mobile
    currentPage.value = 0
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>


<template>

  <section
    id="projects"
    class="scene projects"
    :style="background('portfolio-projects-background')"
  >

    <div class="scene-inner projects-layout">

      <!-- LEFT CONTENT -->

      <div class="copy projects-copy">

        <p class="eyebrow">
          <span>PROJECTS</span>
        </p>

        <h2>
          REAL IDEAS<br />
          REAL IMPACT
        </h2>

        <p class="lead">
          A collection of projects that solve problems,
          create value and make a difference.
        </p>

        <button
          class="outline-btn"
          @click="emit('goTo', 5)"
        >
          VIEW ALL PROJECTS
          <span>→</span>
        </button>

      </div>


      <!-- PROJECTS -->

      <div class="projects-showcase">

        <div class="project-grid">

          <article
            v-for="project in visibleProjects"
            :key="project.title"
            class="project-card"
            @click="openProject(project)"
          >

            <div class="project-thumb">

              <img
                :src="`/images/${projectImage[project.image]}`"
                :alt="project.title"
              />

              <div class="project-overlay">

                <span>VIEW PROJECT</span>

                <ArrowRight />

              </div>

            </div>


            <div class="project-info">

              <span class="project-number">
                {{
                  String(
                    projects.indexOf(project) + 1
                  ).padStart(2, '0')
                }}
              </span>

              <h3>
                {{ project.title }}
              </h3>

              <p>
                {{ project.text }}
              </p>

              <div class="tags">

                <span
                  v-for="tag in project.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span>

              </div>

            </div>

          </article>

        </div>


        <!-- DOT PAGINATION -->

        <div class="projects-controls">

          <button
            class="project-arrow"
            :disabled="currentPage === 0"
            @click="previousPage"
          >
            <ArrowLeft />
          </button>


          <div class="project-dots">

            <button
              v-for="(_, index) in totalPages"
              :key="index"
              class="project-dot"
              :class="{
                active: currentPage === index
              }"
              @click="goToPage(index)"
            />

          </div>


          <button
            class="project-arrow"
            :disabled="currentPage === totalPages - 1"
            @click="nextPage"
          >
            <ArrowRight />
          </button>

        </div>

      </div>


      <div class="counter">
        {{ progress }}
      </div>

    </div>


    <!-- PROJECT MODAL -->

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      :project-index="projects.indexOf(selectedProject)"
      :image="projectImage[selectedProject.image]"
      @close="closeProject"
    />

  </section>

</template>


<style scoped>

/* =========================================================
   PROJECT LAYOUT
   ========================================================= */

.projects-layout {
  display: flex;
  align-items: center;
}

.projects-layout .copy {
  width: 31%;
  flex-shrink: 0;
}

.projects-showcase {
  width: 64%;
  margin-left: auto;
}


/* =========================================================
   PROJECT GRID
   ========================================================= */

.project-grid {
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 12px;
}


/* =========================================================
   CARD
   ========================================================= */

.project-card {
  min-width: 0;

  cursor: pointer;

  border: 1px solid rgba(255,255,255,.2);
  border-radius: 5px;

  background: rgba(12,12,12,.52);

  backdrop-filter: blur(10px);

  overflow: hidden;

  transition:
    transform .3s ease,
    border-color .3s ease,
    background .3s ease;
}

.project-card:hover {
  transform: translateY(-6px);

  border-color:
    rgba(255,255,255,.65);

  background:
    rgba(20,20,20,.7);
}


/* IMAGE */

.project-thumb {
  position: relative;

  aspect-ratio: 1.45;

  overflow: hidden;

  background: #111;
}

.project-thumb img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  filter: grayscale(1);

  transition:
    transform .5s ease,
    filter .5s ease;
}

.project-card:hover
.project-thumb img {
  transform: scale(1.06);
  filter: grayscale(.2);
}


/* OVERLAY */

.project-overlay {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  background:
    rgba(0,0,0,.55);

  opacity: 0;

  transition:
    opacity .3s ease;
}

.project-card:hover
.project-overlay {
  opacity: 1;
}

.project-overlay span {
  font-size: 8px;
  letter-spacing: 1.5px;
}

.project-overlay svg {
  width: 14px;
  height: 14px;
}


/* INFO */

.project-info {
  position: relative;
  padding: 12px;
}

.project-number {
  position: absolute;

  top: 10px;
  right: 12px;

  font-size: 7px;
  letter-spacing: 1px;

  color:
    rgba(255,255,255,.4);
}

.project-card h3 {
  margin:
    0 25px 6px 0;

  font-size: 12px;

  font-weight: 500;
}

.project-card p {
  margin: 0 0 9px;

  font-size: 10px;

  line-height: 1.45;

  color:
    rgba(255,255,255,.66);
}


/* TAGS */

.tags {
  display: flex;
  flex-wrap: wrap;

  gap: 4px;
}

.tags span {
  border:
    1px solid rgba(255,255,255,.15);

  background:
    rgba(255,255,255,.07);

  padding: 3px 6px;

  border-radius: 8px;

  font-size: 10px;

  color:
    rgba(255,255,255,.75);
}


/* =========================================================
   PAGINATION
   ========================================================= */

.projects-controls {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 22px;

  margin-top: 18px;
}

.project-arrow {
  width: 27px;
  height: 27px;

  display: grid;
  place-items: center;

  padding: 0;

  border:
    1px solid rgba(255,255,255,.4);

  border-radius: 50%;

  background:
    rgba(0,0,0,.3);

  color: #fff;

  cursor: pointer;

  transition:
    transform .2s ease,
    border-color .2s ease;
}

.project-arrow svg {
  width: 13px;
  height: 13px;
}

.project-arrow:hover:not(:disabled) {
  transform: scale(1.08);
  border-color: #fff;
}

.project-arrow:disabled {
  opacity: .25;
  cursor: default;
}


/* DOTS */

.project-dots {
  display: flex;

  align-items: center;

  gap: 8px;
}

.project-dot {
  width: 5px;
  height: 5px;

  padding: 0;

  border:
    1px solid rgba(255,255,255,.65);

  border-radius: 50%;

  background: transparent;

  cursor: pointer;

  transition:
    width .25s ease,
    background .25s ease;
}

.project-dot.active {
  width: 18px;

  border-radius: 5px;

  background: #fff;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 640px) {

  .projects-layout {
    display: block;
  }

  .projects-layout .copy {
    width: auto;
    margin-top: 5vh;
  }

  .projects-showcase {
    width: 100%;
    margin-top: 20px;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .project-card {
    width: 100%;
    max-width: 330px;
  }

  .project-thumb {
    aspect-ratio: 2.2;
  }

  .projects-controls {
    margin-top: 12px;
    gap: 15px;
  }

  .project-arrow {
    width: 25px;
    height: 25px;
  }

  .project-dot {
    width: 4px;
    height: 4px;
  }

  .project-dot.active {
    width: 15px;
  }
}

</style>