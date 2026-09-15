<script setup>
import { onMounted, onUnmounted } from 'vue'
import { X } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true
  },

  projectIndex: {
    type: Number,
    required: true
  },

  image: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])


/* Close with ESC */

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}


/* Prevent background scrolling */

onMounted(() => {
  document.body.style.overflow = 'hidden'

  window.addEventListener(
    'keydown',
    handleKeydown
  )
})

onUnmounted(() => {
  document.body.style.overflow = ''

  window.removeEventListener(
    'keydown',
    handleKeydown
  )
})
</script>


<template>

  <Transition name="project-modal">

    <div
      class="project-modal"
      @click.self="emit('close')"
    >

      <div class="project-detail">


        <!-- CLOSE -->

        <button
          class="project-close"
          aria-label="Close project"
          @click="emit('close')"
        >
          <X />
        </button>


        <!-- HEADER -->

        <div class="project-detail-header">

          <div>

            <p class="detail-label">
              PROJECT
              {{
                String(projectIndex + 1)
                  .padStart(2, '0')
              }}
            </p>

            <h2>
              {{ project.title }}
            </h2>

          </div>


          <div class="detail-tags">

            <span
              v-for="tag in project.tags"
              :key="tag"
            >
              {{ tag }}
            </span>

          </div>

        </div>


        <!-- IMAGE -->

        <div class="project-detail-image">

          <img
            :src="`/images/${image}`"
            :alt="project.title"
          />

        </div>


        <!-- DETAILS -->

        <div class="project-detail-content">


          <!-- OVERVIEW -->

          <div class="detail-section">

            <span class="detail-number">
              01
            </span>

            <div>

              <h3>
                OVERVIEW
              </h3>

              <p>
                {{ project.overview }}
              </p>

            </div>

          </div>


          <!-- TECHNOLOGIES -->

          <div class="detail-section">

            <span class="detail-number">
              02
            </span>

            <div>

              <h3>
                TECHNOLOGIES
              </h3>

              <div class="technology-list">

                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                >
                  {{ technology }}
                </span>

              </div>

            </div>

          </div>


          <!-- CONTRIBUTIONS -->

          <div class="detail-section">

            <span class="detail-number">
              03
            </span>

            <div>

              <h3>
                MY CONTRIBUTIONS
              </h3>

              <ul>

                <li
                  v-for="item in project.contributions"
                  :key="item"
                >
                  {{ item }}
                </li>

              </ul>

            </div>

          </div>


          <!-- CHALLENGES -->

          <div class="detail-section">

            <span class="detail-number">
              04
            </span>

            <div>

              <h3>
                CHALLENGES
              </h3>

              <ul>

                <li
                  v-for="item in project.challenges"
                  :key="item"
                >
                  {{ item }}
                </li>

              </ul>

            </div>

          </div>


          <!-- IMPACT -->

          <div class="detail-section">

            <span class="detail-number">
              05
            </span>

            <div>

              <h3>
                IMPACT
              </h3>

              <p>
                {{ project.impact }}
              </p>

            </div>

          </div>


        </div>


        <!-- FOOTER -->

        <div class="project-detail-footer">

          <button
            class="close-project-btn"
            @click="emit('close')"
          >
            CLOSE PROJECT

            <X />
          </button>

        </div>

      </div>

    </div>

  </Transition>

</template>


<style scoped>

/* =========================================================
   MODAL BACKGROUND
   ========================================================= */

.project-modal {
  position: fixed;

  inset: 0;

  z-index: 100;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 40px;

  background:
    rgba(0,0,0,.78);

  backdrop-filter: blur(10px);
}


/* =========================================================
   DETAIL PANEL
   ========================================================= */

.project-detail {
  position: relative;

  width: min(1000px, 92vw);

  max-height: 80vh;

  overflow-y: auto;

  border:
    1px solid rgba(255,255,255,.25);

  background:
    rgba(8,8,8,.97);

  box-shadow:
    0 30px 80px rgba(0,0,0,.65);
}


/* SCROLLBAR */

.project-detail::-webkit-scrollbar {
  width: 4px;
}

.project-detail::-webkit-scrollbar-track {
  background: transparent;
}

.project-detail::-webkit-scrollbar-thumb {
  background:
    rgba(255,255,255,.3);
}


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

.project-close {
  position: absolute;

  z-index: 5;

  top: 16px;
  right: 16px;

  width: 32px;
  height: 32px;

  display: grid;
  place-items: center;

  padding: 0;

  border:
    1px solid rgba(255,255,255,.3);

  border-radius: 50%;

  background:
    rgba(0,0,0,.6);

  color: #fff;

  cursor: pointer;

  transition:
    border-color .2s ease,
    transform .2s ease;
}

.project-close svg {
  width: 14px;
  height: 14px;
}

.project-close:hover {
  border-color: #fff;
  transform: rotate(90deg);
}


/* =========================================================
   HEADER
   ========================================================= */

.project-detail-header {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 30px;

  padding:
    30px 35px 22px;
}

.detail-label {
  margin: 0 0 8px;

  font-size: 8px;

  letter-spacing: 3px;

  color:
    rgba(255,255,255,.45);
}

.project-detail-header h2 {
  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(30px, 4vw, 48px);

  font-weight: 500;

  letter-spacing: 2px;
}


/* =========================================================
   TAGS
   ========================================================= */

.detail-tags {
  display: flex;

  flex-wrap: wrap;

  justify-content: flex-end;

  gap: 5px;
}

.detail-tags span {
  padding: 5px 8px;

  border:
    1px solid rgba(255,255,255,.2);

  font-size: 12px;

  color:
    rgba(255,255,255,.7);
}


/* =========================================================
   IMAGE
   ========================================================= */

.project-detail-image {
  width: 100%;

  height: 240px;

  overflow: hidden;

  border-top:
    1px solid rgba(255,255,255,.1);

  border-bottom:
    1px solid rgba(255,255,255,.1);
}

.project-detail-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  filter: grayscale(1);

  opacity: .8;
}


/* =========================================================
   CONTENT
   ========================================================= */

.project-detail-content {
  padding:
    25px 35px;
}

.detail-section {
  display: grid;

  grid-template-columns:
    45px 1fr;

  gap: 20px;

  padding: 20px 0;

  border-bottom:
    1px solid rgba(255,255,255,.1);
}

.detail-section:last-child {
  border-bottom: 0;
}

.detail-number {
  font-size: 8px;

  letter-spacing: 2px;

  color:
    rgba(255,255,255,.35);
}

.detail-section h3 {
  margin:
    0 0 10px;

  font-size: 12px;

  font-weight: 500;

  letter-spacing: 2px;
}

.detail-section p {
  max-width: 700px;

  margin: 0;

  font-size: 12px;

  line-height: 1.7;

  color:
    rgba(255,255,255,.68);
}


/* LIST */

.detail-section ul {
  margin: 0;

  padding-left: 17px;

  font-size: 12px;

  line-height: 1.8;

  color:
    rgba(255,255,255,.68);
}


/* =========================================================
   TECHNOLOGIES
   ========================================================= */

.technology-list {
  display: flex;

  flex-wrap: wrap;

  gap: 6px;
}

.technology-list span {
  padding: 6px 9px;

  border:
    1px solid rgba(255,255,255,.18);

  background:
    rgba(255,255,255,.04);

  font-size: 12px;

  color:
    rgba(255,255,255,.75);
}


/* =========================================================
   FOOTER
   ========================================================= */

.project-detail-footer {
  display: flex;

  justify-content: flex-end;

  padding:
    0 35px 30px;
}

.close-project-btn {
  display: flex;

  align-items: center;

  gap: 8px;

  padding:
    9px 12px;

  border:
    1px solid rgba(255,255,255,.4);

  background:
    rgba(0,0,0,.3);

  color: #fff;

  font-size: 10px;

  letter-spacing: 1px;

  cursor: pointer;

  transition:
    background .2s ease,
    border-color .2s ease;
}

.close-project-btn svg {
  width: 13px;
  height: 13px;
}

.close-project-btn:hover {
  background:
    rgba(255,255,255,.1);

  border-color: #fff;
}


/* =========================================================
   ANIMATION
   ========================================================= */

.project-modal-enter-active,
.project-modal-leave-active {
  transition:
    opacity .3s ease;
}

.project-modal-enter-active
.project-detail,
.project-modal-leave-active
.project-detail {
  transition:
    opacity .3s ease,
    transform .3s ease;
}

.project-modal-enter-from,
.project-modal-leave-to {
  opacity: 0;
}

.project-modal-enter-from
.project-detail,
.project-modal-leave-to
.project-detail {
  opacity: 0;

  transform:
    translateY(25px)
    scale(.98);
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 640px) {

  .project-modal {
    padding: 12px;
  }

  .project-detail {
    width: 100%;
    max-height: 85vh;
  }

  .project-detail-header {
    display: block;

    padding:
      25px 20px 18px;
  }

  .project-detail-header h2 {
    font-size: 30px;

    padding-right: 35px;
  }

  .detail-tags {
    justify-content: flex-start;

    margin-top: 15px;
  }

  .project-detail-image {
    height: 150px;
  }

  .project-detail-content {
    padding:
      10px 20px;
  }

  .detail-section {
    grid-template-columns:
      30px 1fr;

    gap: 10px;

    padding: 16px 0;
  }

  .detail-section p,
  .detail-section ul {
    font-size: 8px;
  }

  .project-detail-footer {
    padding:
      0 20px 20px;
  }

}

</style>