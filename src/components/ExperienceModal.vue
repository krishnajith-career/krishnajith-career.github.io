<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  experience: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])


const closeModal = () => {
  emit('close')
}


const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}


const handleBackgroundClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}


onMounted(() => {
  document.addEventListener('keydown', handleEscape)

  document.body.classList.add('experience-modal-open')
})


onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)

  document.body.classList.remove('experience-modal-open')
})
</script>


<template>

  <Teleport to="body">

    <!-- =========================================
         OVERLAY
    ========================================== -->

    <div
      class="experience-modal-overlay"
      @click="handleBackgroundClick"
    >

      <!-- =======================================
           RIGHT SIDE PANEL
      ======================================== -->

      <aside class="experience-modal">

        <!-- Close -->
        <button
          class="modal-close"
          @click="closeModal"
          aria-label="Close experience"
        >
          ×
        </button>


        <!-- =====================================
             HEADER
        ====================================== -->

        <header class="modal-header">

          <div class="modal-company-icon">
            {{ experience.icon }}
          </div>


          <div>

            <p class="modal-label">
              EXPERIENCE
            </p>

            <h2>
              {{ experience.role }}
            </h2>

            <p class="modal-company">
              {{ experience.company }}
            </p>

          </div>

        </header>


        <!-- =====================================
             META
        ====================================== -->

        <div class="modal-meta">

          <div class="modal-meta-item">

            <span class="meta-title">
              PERIOD
            </span>

            <span>
              {{ experience.year }}
            </span>

          </div>


          <div class="modal-meta-item">

            <span class="meta-title">
              LOCATION
            </span>

            <span>
              {{ experience.location }}
            </span>

          </div>


          <div class="modal-meta-item">

            <span class="meta-title">
              TYPE
            </span>

            <span>
              {{ experience.type }}
            </span>

          </div>

        </div>


        <!-- =====================================
             OVERVIEW
        ====================================== -->

        <section class="modal-section">

          <div class="section-heading">

            <span>
              01
            </span>

            <h3>
              OVERVIEW
            </h3>

          </div>


          <p class="modal-description">
            {{ experience.overview }}
          </p>

        </section>


        <!-- =====================================
             MAJOR CONTRIBUTIONS
        ====================================== -->

        <section class="modal-section">

          <div class="section-heading">

            <span>
              02
            </span>

            <h3>
              MAJOR CONTRIBUTIONS
            </h3>

          </div>


          <ul class="contribution-list">

            <li
              v-for="(contribution, index) in experience.contributions"
              :key="index"
            >

              <span class="contribution-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <span>
                {{ contribution }}
              </span>

            </li>

          </ul>

        </section>


        <!-- =====================================
             HIGHLIGHTS
        ====================================== -->

        <section class="modal-section">

          <div class="section-heading">

            <span>
              03
            </span>

            <h3>
              KEY AREAS
            </h3>

          </div>


          <div class="highlight-list">

            <span
              v-for="highlight in experience.highlights"
              :key="highlight"
            >
              {{ highlight }}
            </span>

          </div>

        </section>


        <!-- =====================================
             TECHNOLOGIES + RATINGS
        ====================================== -->

        <section class="modal-section technologies-section">

          <div class="section-heading">

            <span>
              04
            </span>

            <h3>
              TECHNOLOGY PROFICIENCY
            </h3>

          </div>


          <div class="technology-list">

            <div
              v-for="technology in experience.technologies"
              :key="technology.name"
              class="technology-item"
            >

              <div class="technology-top">

                <span class="technology-name">
                  {{ technology.name }}
                </span>

                <span class="technology-rating">
                  {{ technology.rating }}%
                </span>

              </div>


              <div class="rating-track">

                <div
                  class="rating-fill"
                  :style="{
                    width: `${technology.rating}%`
                  }"
                ></div>

              </div>

            </div>

          </div>

        </section>


        <!-- =====================================
             FOOTER
        ====================================== -->

        <footer class="modal-footer">

          <span>
            KRISHNAJITH V
          </span>

          <span>
            {{ experience.year }}
          </span>

        </footer>

      </aside>

    </div>

  </Teleport>

</template>


<style scoped>

/* =========================================================
   OVERLAY
========================================================= */

.experience-modal-overlay {
  position: fixed;

  inset: 0;

  z-index: 9999;

  display: flex;

  justify-content: flex-end;

  background: rgba(0, 0, 0, 0.55);

  backdrop-filter: blur(7px);

  animation: overlayIn 0.3s ease;
}


/* =========================================================
   MODAL
========================================================= */

.experience-modal {
  position: relative;

  width: min(620px, 48vw);

  height: 100vh;

  overflow-y: auto;

  padding: 55px 50px 35px;

  background:
    linear-gradient(
      180deg,
      rgba(15, 15, 15, 0.98),
      rgba(5, 5, 5, 0.99)
    );

  border-left: 1px solid rgba(255, 255, 255, 0.14);

  color: #fff;

  box-shadow:
    -20px 0 80px rgba(0, 0, 0, 0.55);

  animation: panelIn 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}


/* Scrollbar */

.experience-modal::-webkit-scrollbar {
  width: 3px;
}

.experience-modal::-webkit-scrollbar-track {
  background: transparent;
}

.experience-modal::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.25);
}


/* =========================================================
   CLOSE
========================================================= */

.modal-close {
  position: absolute;

  top: 25px;
  right: 28px;

  width: 40px;
  height: 40px;

  border: 1px solid rgba(255, 255, 255, 0.22);

  border-radius: 50%;

  background: transparent;

  color: #fff;

  font-size: 25px;

  line-height: 1;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease;
}


.modal-close:hover {
  background: #fff;

  color: #000;
}


/* =========================================================
   HEADER
========================================================= */

.modal-header {
  display: flex;

  align-items: center;

  gap: 20px;

  padding-right: 50px;
}


.modal-company-icon {
  flex-shrink: 0;

  width: 65px;
  height: 65px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.65);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.04);

  font-size: 23px;

  font-weight: 500;
}


.modal-label {
  margin: 0 0 7px;

  color: rgba(255, 255, 255, 0.42);

  font-size: 9px;

  letter-spacing: 2px;
}


.modal-header h2 {
  margin: 0 0 7px;

  font-size: clamp(22px, 2vw, 31px);

  line-height: 1.1;

  font-weight: 500;

  letter-spacing: -0.035em;
}


.modal-company {
  margin: 0;

  color: rgba(255, 255, 255, 0.55);

  font-size: 12px;
}


/* =========================================================
   META
========================================================= */

.modal-meta {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 12px;

  margin-top: 40px;

  padding: 17px 0;

  border-top: 1px solid rgba(255, 255, 255, 0.10);

  border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}


.modal-meta-item {
  display: flex;

  flex-direction: column;

  gap: 7px;

  color: rgba(255, 255, 255, 0.7);

  font-size: 10px;

  line-height: 1.4;
}


.meta-title {
  color: rgba(255, 255, 255, 0.32);

  font-size: 8px;

  letter-spacing: 1.2px;
}


/* =========================================================
   SECTION
========================================================= */

.modal-section {
  margin-top: 38px;
}


.section-heading {
  display: flex;

  align-items: center;

  gap: 13px;

  margin-bottom: 17px;
}


.section-heading > span {
  color: rgba(255, 255, 255, 0.30);

  font-size: 9px;

  letter-spacing: 1px;
}


.section-heading h3 {
  margin: 0;

  color: #fff;

  font-size: 10px;

  font-weight: 600;

  letter-spacing: 1.6px;
}


.modal-description {
  margin: 0;

  color: rgba(255, 255, 255, 0.58);

  font-size: 12px;

  line-height: 1.75;
}


/* =========================================================
   CONTRIBUTIONS
========================================================= */

.contribution-list {
  display: flex;

  flex-direction: column;

  gap: 13px;

  margin: 0;

  padding: 0;

  list-style: none;
}


.contribution-list li {
  display: flex;

  align-items: flex-start;

  gap: 13px;

  color: rgba(255, 255, 255, 0.65);

  font-size: 11px;

  line-height: 1.55;
}


.contribution-number {
  flex-shrink: 0;

  color: rgba(255, 255, 255, 0.27);

  font-size: 8px;

  letter-spacing: 1px;

  padding-top: 2px;
}


/* =========================================================
   HIGHLIGHTS
========================================================= */

.highlight-list {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;
}


.highlight-list span {
  padding: 8px 11px;

  border: 1px solid rgba(255, 255, 255, 0.13);

  background: rgba(255, 255, 255, 0.025);

  color: rgba(255, 255, 255, 0.65);

  font-size: 9px;

  transition:
    border-color 0.25s ease,
    background 0.25s ease;
}


.highlight-list span:hover {
  border-color: rgba(255, 255, 255, 0.35);

  background: rgba(255, 255, 255, 0.06);
}


/* =========================================================
   TECHNOLOGIES
========================================================= */

.technology-list {
  display: flex;

  flex-direction: column;

  gap: 17px;
}


.technology-item {
  width: 100%;
}


.technology-top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 7px;
}


.technology-name {
  color: rgba(255, 255, 255, 0.75);

  font-size: 10px;

  font-weight: 500;
}


.technology-rating {
  color: rgba(255, 255, 255, 0.42);

  font-size: 9px;

  letter-spacing: 0.5px;
}


.rating-track {
  width: 100%;

  height: 2px;

  background: rgba(255, 255, 255, 0.10);

  overflow: hidden;
}


.rating-fill {
  height: 100%;

  background: #fff;

  transform-origin: left;

  animation: ratingIn 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}


/* =========================================================
   FOOTER
========================================================= */

.modal-footer {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 50px;

  padding-top: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.10);

  color: rgba(255, 255, 255, 0.25);

  font-size: 8px;

  letter-spacing: 1.2px;
}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes panelIn {

  from {
    opacity: 0;

    transform: translateX(100%);
  }

  to {
    opacity: 1;

    transform: translateX(0);
  }

}


@keyframes overlayIn {

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

}


@keyframes ratingIn {

  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 700px) {

  .experience-modal-overlay {
    align-items: flex-end;
  }


  .experience-modal {
    width: 100%;

    height: 92vh;

    padding: 42px 25px 28px;

    border-left: 0;

    border-top: 1px solid rgba(255, 255, 255, 0.15);

    border-radius: 18px 18px 0 0;

    animation:
      mobilePanelIn 0.4s
      cubic-bezier(0.22, 1, 0.36, 1);
  }


  .modal-close {
    top: 17px;

    right: 20px;

    width: 34px;
    height: 34px;

    font-size: 21px;
  }


  .modal-header {
    gap: 14px;

    padding-right: 40px;
  }


  .modal-company-icon {
    width: 48px;
    height: 48px;

    font-size: 18px;
  }


  .modal-label {
    font-size: 7px;
  }


  .modal-header h2 {
    font-size: 19px;
  }


  .modal-company {
    font-size: 10px;
  }


  .modal-meta {
    margin-top: 28px;

    gap: 8px;
  }


  .modal-meta-item {
    font-size: 8px;
  }


  .meta-title {
    font-size: 7px;
  }


  .modal-section {
    margin-top: 30px;
  }


  .modal-description {
    font-size: 10px;

    line-height: 1.7;
  }


  .contribution-list {
    gap: 10px;
  }


  .contribution-list li {
    font-size: 9px;
  }


  .highlight-list span {
    padding: 7px 9px;

    font-size: 8px;
  }


  .technology-list {
    gap: 14px;
  }


  .technology-name {
    font-size: 9px;
  }


  .technology-rating {
    font-size: 8px;
  }


  .modal-footer {
    margin-top: 35px;
  }

}


@keyframes mobilePanelIn {

  from {
    opacity: 0;

    transform: translateY(100%);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }

}

</style>