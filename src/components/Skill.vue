<script setup>

import { computed, defineEmits, defineProps, ref } from 'vue'

import { useBackground } from '../composables/useBackground'

import SkillModel from './SkillModel.vue'

const { background } = useBackground()

const props = defineProps({

  progress: {

    type: String,

    required: true

  }

})

const emit = defineEmits(['goTo'])

/*
|--------------------------------------------------------------------------
| SKILLS DATA
|--------------------------------------------------------------------------
*/

const skills = [

  {

    name: 'Vue.js',

    icon: 'devicon-vuejs-plain ',

    rating: 95,

    category: 'Frontend',

    experience: '5+ Years',

    description:
      'Primary frontend technology used for scalable enterprise applications.',

    major: [

      'Vue 2 & Vue 3',

      'Composition API',

      'Vue Router',

      'Vuex / Pinia',

      'Reusable Components',

      'Lazy Loading',

      'Performance Optimization'

    ]

  },

  {

    name: 'JavaScript',

    icon: 'devicon-javascript-plain',

    rating: 92,

    category: 'Frontend',

    experience: '5+ Years',

    description:
      'Used extensively for building interactive and scalable web applications.',

    major: [

      'ES6+',

      'Async / Await',

      'Promises',

      'API Integration',

      'DOM',

      'Reusable Logic'

    ]

  },

  {

    name: 'TypeScript',

    icon: 'devicon-typescript-plain',

    rating: 80,

    category: 'Frontend',

    experience: 'Professional Experience',

    description:
      'Used to improve type safety, maintainability and reliability in modern applications.',

    major: [

      'Types',

      'Interfaces',

      'Type Safety',

      'API Models',

      'Component Development'

    ]

  },

  {

    name: 'React.js',

    icon: 'devicon-react-original',

    rating: 70,

    category: 'Frontend',

    experience: 'Professional Experience',

    description:
      'Experience developing and maintaining enterprise applications using React.js.',

    major: [

      'Components',

      'Hooks',

      'Reusable UI',

      'API Integration',

      'State Management'

    ]

  },

  {

    name: 'HTML5',

    icon: 'devicon-html5-plain',

    rating: 95,

    category: 'Frontend',

    experience: '6+ Years',

    description:
      'Strong experience building semantic and responsive web interfaces.',

    major: [

      'Semantic HTML',

      'Forms',

      'Accessibility',

      'Responsive Layout',

      'SEO Structure'

    ]

  },

  {

    name: 'CSS3',

    icon: 'devicon-css3-plain',

    rating: 92,

    category: 'Frontend',

    experience: '6+ Years',

    description:
      'Extensive experience creating responsive and visually polished interfaces.',

    major: [

      'Responsive Design',

      'Flexbox',

      'Grid',

      'Animations',

      'Transitions',

      'Media Queries'

    ]

  },

  {

    name: 'PHP',

    icon: 'devicon-php-plain',

    rating: 90,

    category: 'Backend',

    experience: '5+ Years',

    description:
      'Extensive backend experience building enterprise applications and APIs.',

    major: [

      'Core PHP',

      'MVC',

      'REST APIs',

      'Authentication',

      'Session Management',

      'Security'

    ]

  },

  {

    name: 'Node.js',

    icon: 'devicon-nodejs-plain',

    rating: 75,

    category: 'Backend',

    experience: 'Professional Experience',

    description:
      'Experience with backend services, REST APIs, dependency management and Node.js upgrades.',

    major: [

      'REST APIs',

      'Async Programming',

      'Dependency Management',

      'Node.js Upgrades',

      'Backend Services'

    ]

  },

  {

    name: 'MySQL',

    icon: 'devicon-mysql-plain',

    rating: 88,

    category: 'Database',

    experience: '5+ Years',

    description:
      'Hands-on experience with database design, complex queries and performance optimization.',

    major: [

      'Database Design',

      'SQL',

      'Query Optimization',

      'Schema Design',

      'Performance Tuning'

    ]

  },

  {

    name: 'Docker',

    icon: 'devicon-docker-plain',

    rating: 75,

    category: 'DevOps',

    experience: 'Professional Experience',

    description:
      'Used Docker for application development and environment management.',

    major: [

      'Containers',

      'Docker Images',

      'Development Environments',

      'Service Configuration'

    ]

  },

  {

    name: 'AWS',

    icon: 'devicon-amazonwebservices-plain-wordmark',

    rating: 72,

    category: 'Cloud',

    experience: 'Professional Experience',

    description:
      'Hands-on experience with AWS infrastructure and S3 storage.',

    major: [

      'AWS S3',

      'Cloud Storage',

      'Application Integration',

      'Secure Storage'

    ]

  },

  {

    name: 'Git',

    icon: 'devicon-git-plain',

    rating: 90,

    category: 'Tools',

    experience: '6+ Years',

    description:
      'Daily experience with Git-based development, collaboration and source control.',

    major: [

      'Git',

      'GitHub',

      'GitLab',

      'Branching',

      'Code Reviews'

    ]

  },

  {

    name: 'Bootstrap',

    icon: 'devicon-bootstrap-plain',

    rating: 85,

    category: 'Frontend',

    experience: 'Professional Experience',

    description:
      'Used for responsive UI development and rapid interface implementation.',

    major: [

      'Responsive Grid',

      'Components',

      'Utilities',

      'Responsive Design'

    ]

  },

  {

    name: 'Tailwind CSS',

    icon: 'devicon-tailwindcss-original',

    rating: 80,

    category: 'Frontend',

    experience: 'Professional Experience',

    description:
      'Used for building responsive and reusable modern interfaces.',

    major: [

      'Utility Classes',

      'Responsive Design',

      'Component Styling',

      'Custom UI'

    ]

  },

  {

    name: 'CI/CD',

    icon: 'skill-cicd-icon',

    rating: 85,

    category: 'DevOps',

    experience: 'Professional Experience',

    description:
      'Experience implementing automated build, testing and deployment pipelines.',

    major: [

      'Jenkins',

      'GitHub Actions',

      'Automated Builds',

      'Testing',

      'Deployment'

    ]

  },

  {

    name: 'Jenkins',

    icon: 'devicon-jenkins-line',

    rating: 82,

    category: 'DevOps',

    experience: 'Professional Experience',

    description:
      'Used Jenkins to automate application build and deployment workflows.',

    major: [

      'CI/CD',

      'Build Pipelines',

      'Deployment',

      'Automation'

    ]

  },

  {

    name: 'GitHub Actions',

    icon: 'devicon-github-original',

    rating: 82,

    category: 'DevOps',

    experience: 'Professional Experience',

    description:
      'Used GitHub Actions to automate CI/CD workflows and application releases.',

    major: [

      'CI/CD',

      'Workflow Automation',

      'Builds',

      'Deployments'

    ]

  },

  {

    name: 'Linux',

    icon: 'devicon-linux-plain',

    rating: 75,

    category: 'System',

    experience: 'Professional Experience',

    description:
      'Experience working with Linux-based development and deployment environments.',

    major: [

      'Linux',

      'CLI',

      'Server Management',

      'Application Deployment'

    ]

  },

  {

    name: 'Jira',

    icon: 'devicon-jira-plain',

    rating: 85,

    category: 'Tools',

    experience: 'Professional Experience',

    description:
      'Used Jira for Agile project management, sprint planning and issue tracking.',

    major: [

      'Sprint Planning',

      'Issue Tracking',

      'Agile',

      'Task Management'

    ]

  },

  {

    name: 'REST APIs',

    icon: 'skill-api-icon',

    rating: 90,

    category: 'Backend',

    experience: '5+ Years',

    description:
      'Designed, developed and consumed RESTful APIs across enterprise applications.',

    major: [

      'API Design',

      'API Integration',

      'Authentication',

      'Third-party APIs',

      'JSON'

    ]

  }

]

/*
|--------------------------------------------------------------------------
| SKILL MODAL
|--------------------------------------------------------------------------
*/

const selectedSkill = ref(null)

const selectedSkillData = computed(() => {

  if (selectedSkill.value === null) {

    return null

  }

  return skills[selectedSkill.value]

})

const openSkill = (index) => {

  selectedSkill.value = index

}

const closeSkill = () => {

  selectedSkill.value = null

}

const nextSkill = () => {

  if (selectedSkill.value === null) {

    return

  }

  selectedSkill.value =
    (selectedSkill.value + 1) % skills.length

}

const previousSkill = () => {

  if (selectedSkill.value === null) {

    return

  }

  selectedSkill.value =
    (selectedSkill.value - 1 + skills.length) % skills.length

}

const selectSkill = (index) => {

  selectedSkill.value = index

}

/*
|--------------------------------------------------------------------------
| PAGINATION
|--------------------------------------------------------------------------
*/

const skillsPerPage = 9

const currentSkillPage = ref(0)

const totalSkillPages = computed(() => {

  return Math.ceil(
    skills.length / skillsPerPage
  )

})

const visibleSkills = computed(() => {

  const start =
    currentSkillPage.value * skillsPerPage

  return skills.slice(
    start,
    start + skillsPerPage
  )

})

const nextSkillPage = () => {

  if (
    currentSkillPage.value <
    totalSkillPages.value - 1
  ) {

    currentSkillPage.value++

  }

}

const previousSkillPage = () => {

  if (currentSkillPage.value > 0) {

    currentSkillPage.value--

  }

}

const goToSkillPage = (index) => {

  if (
    index >= 0 &&
    index < totalSkillPages.value
  ) {

    currentSkillPage.value = index

  }

}

/*
|--------------------------------------------------------------------------
| MOBILE SWIPE
|--------------------------------------------------------------------------
*/

let touchStartX = 0

let touchEndX = 0

const handleTouchStart = (event) => {

  touchStartX =
    event.changedTouches[0].screenX

}

const handleTouchEnd = (event) => {

  touchEndX =
    event.changedTouches[0].screenX

  const distance =
    touchEndX - touchStartX

  if (Math.abs(distance) < 50) {

    return

  }

  if (distance < 0) {

    nextSkillPage()

  } else {

    previousSkillPage()

  }

}

const hoveredSkill = ref(null)

</script>

<template>

  <section
    id="skills"
    class="scene skills"
    :style="background('portfolio-skills-background')"
  >

    <div class="scene-inner skills-layout">

      <!-- LEFT CONTENT -->

      <div class="copy">

        <p class="eyebrow">

          <span>SKILLS</span>

        </p>

        <h2>

          TOOLS<br />

          THAT BUILD<br />

          POSSIBILITIES

        </h2>

        <p class="lead">

          Technologies I work with to create

          <br class="desktop" />

          scalable and engaging experiences.

        </p>

        <button
          class="outline-btn"
          @click="emit('goTo', 3)"
        >

          EXPLORE SKILLS

          <span>→</span>

        </button>

      </div>


      <!-- SKILL CAROUSEL -->

      <div
        class="skills-carousel"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >

        <!-- PREVIOUS PAGE -->

        <button
          class="skill-nav skill-nav-left"
          :disabled="currentSkillPage === 0"
          @click="previousSkillPage"
          aria-label="Previous skills"
        >

          ←

        </button>


        <!-- SKILL GRID -->

        <div class="skill-grid">

          <button
            v-for="(skill, index) in visibleSkills"
            :key="skill.name"
            class="skill-card"
            @mouseenter="hoveredSkill = skill.name"
            @mouseleave="hoveredSkill = null"
            @click="
              openSkill(
                currentSkillPage * skillsPerPage + index
              )
            "
          >

            <div class="skill-logo">

              <i
                v-if="
                  skill.icon !== 'skill-api-icon' &&
                  skill.icon !== 'skill-cicd-icon'
                "
                :class="[skill.icon, { colored: hoveredSkill === skill.name }]"
              ></i>

              <span
                v-else-if="skill.icon === 'skill-api-icon'"
                :class="['custom-skill-icon',{ colored: hoveredSkill === skill.name }]"
              >

                {}

              </span>

              <span
                v-else
                :class="['custom-skill-icon',{ colored: hoveredSkill === skill.name }]"
              >

                ↻

              </span>

            </div>

            <span class="skill-name">

              {{ skill.name }}

            </span>

          </button>

        </div>


        <!-- NEXT PAGE -->

        <button
          class="skill-nav skill-nav-right"
          :disabled="
            currentSkillPage === totalSkillPages - 1
          "
          @click="nextSkillPage"
          aria-label="Next skills"
        >

          →

        </button>


        <!-- PAGINATION -->

        <div class="skill-pagination">

          <button
            v-for="page in totalSkillPages"
            :key="page"
            class="skill-page-dot"
            :class="{
              active:
                currentSkillPage === page - 1
            }"
            @click="goToSkillPage(page - 1)"
            :aria-label="`Skill page ${page}`"
            :aria-current="
              currentSkillPage === page - 1
                ? 'page'
                : undefined
            "
          ></button>

        </div>

      </div>


      <!-- COUNTER -->

      <div class="counter">

        {{ props.progress }}

      </div>

    </div>


    <!-- SKILL MODAL -->

    <SkillModel
      :skill="selectedSkillData"
      :skills="skills"
      :selected-index="selectedSkill"
      @close="closeSkill"
      @previous="previousSkill"
      @next="nextSkill"
      @select="selectSkill"
    />

  </section>

</template>

<style scoped>

/*
|--------------------------------------------------------------------------
| SKILLS CAROUSEL
|--------------------------------------------------------------------------
*/

.skills-carousel {

  flex: 1;

  min-width: 0;

  display: grid;

  grid-template-columns: 200px 1fr 200px;

  grid-template-rows: auto auto;

  align-items: center;

  justify-items: center;

  column-gap: 12px;

  row-gap: 12px;

}


/*
|--------------------------------------------------------------------------
| NAVIGATION BUTTONS
|--------------------------------------------------------------------------
*/

.skill-nav {

  flex-shrink: 0;

  width: 38px;

  height: 38px;

  display: grid;

  place-items: center;

  border: 1px solid rgba(255, 255, 255, 0.3);

  background: rgba(0, 0, 0, 0.25);

  color: white;

  cursor: pointer;

  font-size: 18px;

  transition:
    background 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease;

}

.skill-nav:hover:not(:disabled) {

  background: rgba(255, 255, 255, 0.12);

  transform: scale(1.05);

}

.skill-nav:disabled {

  opacity: 0.2;

  cursor: default;

}


/*
|--------------------------------------------------------------------------
| SKILL GRID
|--------------------------------------------------------------------------
*/

.skill-grid {

  grid-column: 2;

  grid-row: 1;

  width: 100%;

  margin: 0;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 8px;

}


/*
|--------------------------------------------------------------------------
| SKILL CARDS
|--------------------------------------------------------------------------
*/

.skill-card {

  min-height: 150px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 14px;

  border: 1px solid rgba(255, 255, 255, 0.22);

  background: rgba(20, 20, 20, 0.5);

  color: white;

  cursor: pointer;

  transition:
    transform 0.35s ease,
    background 0.35s ease,
    border-color 0.35s ease;

}

.skill-card:hover {

  transform: translateY(-5px);

  background: rgba(255, 255, 255, 0.08);

  border-color: rgba(255, 255, 255, 0.6);

}


/*
|--------------------------------------------------------------------------
| SKILL LOGO
|--------------------------------------------------------------------------
*/

.skill-logo {

  height: 42px;

  display: flex;

  align-items: center;

  justify-content: center;

}
.skill-logo i {
  font-size: 48px;
  opacity: 0.85;
  filter: none;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.skill-logo i.colored {
  opacity: 1;
  transform: scale(1.1);
}
.custom-skill-icon {

  display: flex;

  align-items: center;

  justify-content: center;

  font-family: monospace;

  font-size: 28px;

  font-weight: 500;

}


/*
|--------------------------------------------------------------------------
| SKILL NAME
|--------------------------------------------------------------------------
*/

.skill-card > span.skill-name {

  font-size: 14px;

}


/*
|--------------------------------------------------------------------------
| PAGINATION
|--------------------------------------------------------------------------
*/

.skill-pagination {

  grid-column: 2;

  grid-row: 2;

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 9px;

  margin: 0;

}

.skill-page-dot {

  width: 6px;

  height: 6px;

  padding: 0;

  border: 0;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.3);

  cursor: pointer;

  transition:
    transform 0.3s ease,
    background 0.3s ease;

}

.skill-page-dot:hover {

  background: rgba(255, 255, 255, 0.7);

}

.skill-page-dot.active {

  background: white;

  transform: scale(1.8);

}


/*
|--------------------------------------------------------------------------
| MOBILE
|--------------------------------------------------------------------------
*/

@media (max-width: 640px) {

  .skill-nav-left,
  .skill-nav-right {
    display: none;
  }

  .skills-carousel {

    width: 100%;

    display: grid;

    grid-template-columns: 28px 1fr 28px;

    grid-template-rows: auto auto;

    column-gap: 6px;

    row-gap: 12px;

    margin-top: 15px;
    justify-items: normal;

  }

  .skill-grid {

    width: auto;

    flex: none;

    grid-column: 2;

    grid-row: 1;

    margin: 0;

    grid-template-columns:
      repeat(3, minmax(0, 1fr));

    gap: 6px;

  }

  .skill-nav-left {

    grid-column: 1;

    grid-row: 1;

  }

  .skill-nav-right {

    grid-column: 3;

    grid-row: 1;

  }

  .skill-card {

    min-height: 90px;

    aspect-ratio: 1;

    gap: 6px;

    font-size: 9px;

  }

  .skill-logo {

    height: 28px;

  }

  .skill-logo i {

    font-size: 25px;

  }

  .custom-skill-icon {

    font-size: 20px;

  }

  .skill-card > span.skill-name {

    font-size: 8px;

  }

  .skill-nav {

    width: 28px;

    height: 28px;

    font-size: 14px;

  }

  .skill-pagination {

    grid-column: 2;

    grid-row: 2;

    justify-content: center;

    margin-top: 0;

  }

}

</style>