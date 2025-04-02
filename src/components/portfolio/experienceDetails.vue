<template>
  <section class="experience" id="experience">
    <h2 class="numbered-heading">Where I’ve Worked</h2>
    <div class="inner">
      <!-- Tabs -->
      <div role="tablist" class="tab-list" aria-label="Job tabs">
        <button
          v-for="(experience, index) in experiences"
          :key="index"
          role="tab"
          :tabindex="activeTab === index ? 0 : -1"
          :aria-selected="activeTab === index"
          :aria-controls="'panel-' + index"
          @click="setActiveTab(index)"
          :class="activeTab === index ? 'tab-button-active' : 'tab-button'">
          {{ experience.buttonName }}
        </button>
      </div>

      <!-- Tab Panels -->
      <div class="tab-content">
        <div
          v-for="(experience, index) in experiences"
          :key="'panel-' + index"
          role="tabpanel"
          :id="'panel-' + index"
          :aria-labelledby="'tab-' + index"
          :aria-hidden="activeTab !== index"
          v-show="activeTab === index"
          class="tab-panel-body"
        >
          <h3>
            <span>{{ experience.position }}</span>
            <span class="company-name">&nbsp;@&nbsp;{{ experience.company }}</span>
          </h3>
          <p class="range">{{ experience.range }}</p>
          <ul v-if="experience.responsibilities.length">
            <li v-for="(responsibility, i) in experience.responsibilities" :key="i">
              {{ responsibility }}
            </li>
          </ul>
          <p v-else>No responsibilities listed.</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'experienceDetails',
  data() {
    return {
      activeTab: 0,
      experiences: [
        {
          buttonName: "L2 Software Dev",
          position: "Level-2 Software Developer",
          company: "Linways",
          range: "Nov 2021 - Mar 2025",
          responsibilities: [
            "Reviewed code for junior developers, providing structured guidance that improved adherence to coding standards by 30%, enhancing maintainability and reducing errors.",
            "Migrated the frontend to Vue.js, enhancing UI/UX performance by 40%, reducing manual errors by 35%, and boosting page load speed by 50% through a dynamic and reactive architecture. Optimized component reusability, state management, and lazy loading, reducing load times by 40% and ensuring seamless user interactions.",
            "Integrated third-party APIs and payment gateways into the Academic ERP system, increasing transaction efficiency and reducing payment failures by 25%. Additionally, implemented Amazon S3 storage, ensuring efficient handling of large data volumes with improved scalability and reliability.",
            "Optimized complex MySQL queries, reducing query execution time by 60% and improving overall system efficiency. Strengthened security by implementing SQL injection prevention measures, ensuring data integrity and robust system protection.",
            "Established coding standards and a style guide, improving code consistency and reducing technical debt by 35%.",
            "Developed and automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 70% and ensuring faster, more reliable software releases.",
            "Led and facilitated collaboration across cross-functional teams, ensuring streamlined workflows that resulted in a 20% reduction in project completion time.",
            "Deployed token-based authentication to enhance system security and user access management, reducing unauthorized access incidents by 40% and improving session management efficiency."
          ],
        },
        {
          buttonName: "L1 Software Dev",
          position: "Level-2 Software Developer",
          company: "Linways",
          range: "Jul 2020 - Nov 2021",
          responsibilities: [
            "Led the development and management of the Exam & Academics Modules in an Academic ERP system, enhancing system efficiency by 30%.",
            "Optimized critical web applications, improving performance by 70% through code refactoring and automation of manual tasks, resulting in increased efficiency and faster load times.",
            "Contributed to Agile development workflows, resolving software defects efficiently using Redmine, reducing bug resolution time by 40%.",
            "Created unit tests and conducted thorough debugging, ensuring 99% bug-free releases and improving overall software stability.",
            "Collaborated closely with senior developers, improving code quality and maintainability by 30% through structured reviews, adherence to coding standards, and knowledge sharing.",
            "Developed and optimized SMS functionality using PHP, reducing message processing delays by 40% and enhancing delivery reliability by implementing a queue mechanism."
          ],
        },
        {
          buttonName: "Embeded Dev",
          position: "Embeded Developer",
          company: "Presevi Industries",
          range: "Jun 2016 - Jul 2017",
          responsibilities: [
            "Optimized coding, testing, and implementation of C programs for embedded projects, reducing development time by 20% and increasing system efficiency by 15%.",
            "Built a Wi-Fi-based Room Controller System, integrating an embedded module with an Android application, leading to a 20% improvement in automation efficiency and enabling seamless remote control.",
            "Assembled and validated a functional prototype, working alongside PCB teams, ensuring 100% compatibility across hardware and software components for efficient mass production.",
            "Maintained strong teamwork and clear communication with senior engineers and cross-functional teams, ensuring a 25% reduction in project turnaround time through effective collaboration and knowledge sharing."
          ],
        },
      ],
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/mainPage.scss'; 
@import '../../assets/styles/variables';
</style>