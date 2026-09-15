<script setup>
const props = defineProps({
  skill: {
    type: Object,
    default: null
  },

  skills: {
    type: Array,
    default: () => []
  },

  selectedIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits([
  'close',
  'previous',
  'next',
  'select'
])
</script>

<template>
  <Transition name="skill-modal">

    <div
      v-if="props.skill"
      class="skill-modal-overlay"
      @click.self="emit('close')"
    >

      <div
        class="skill-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="`${props.skill.name} skill details`"
      >

        <!-- CLOSE BUTTON -->
        <button
          class="modal-close"
          @click="emit('close')"
          aria-label="Close skill details"
        >
          ×
        </button>


        <!-- HEADER -->
        <div class="modal-header">

          <div class="modal-icon">

            <i
              v-if="
                props.skill.icon !== 'skill-api-icon' &&
                props.skill.icon !== 'skill-cicd-icon'
              "
              :class="props.skill.icon + ' colored'"
            ></i>

            <span
              v-else-if="
                props.skill.icon === 'skill-api-icon'
              "
              class="custom-modal-icon colored"
            >
              {}
            </span>

            <span
              v-else
              class="custom-modal-icon colored"
            >
              ↻
            </span>

          </div>


          <div>

            <span class="modal-category">
              {{ props.skill.category }}
            </span>

            <h3>
              {{ props.skill.name }}
            </h3>

          </div>

        </div>


        <!-- RATING -->
        <div class="skill-rating">

          <div class="rating-header">

            <span>
              OVERALL PROFICIENCY
            </span>

            <strong>
              {{ props.skill.rating }}%
            </strong>

          </div>


          <div class="rating-bar">

            <div
              class="rating-fill"
              :style="{
                width: `${props.skill.rating}%`
              }"
            ></div>

          </div>

        </div>


        <!-- EXPERIENCE -->
        <div class="skill-experience">

          <span>
            EXPERIENCE
          </span>

          <strong>
            {{ props.skill.experience }}
          </strong>

        </div>


        <!-- DESCRIPTION -->
        <p class="skill-description">
          {{ props.skill.description }}
        </p>


        <!-- MAJOR EXPERIENCE -->
        <div class="major-skills">

          <span class="section-label">
            MAJOR EXPERIENCE
          </span>


          <div class="skill-tags">

            <span
              v-for="item in props.skill.major"
              :key="item"
              class="skill-tag"
            >
              {{ item }}
            </span>

          </div>

        </div>


        <!-- MODAL NAVIGATION -->
        <div class="modal-navigation">

          <!-- PREVIOUS -->
          <button
            class="modal-arrow"
            @click="emit('previous')"
            aria-label="Previous skill"
          >
            ←
          </button>


          <!-- DOTS -->
          <div
            class="skill-dots"
            aria-label="Skill navigation"
          >

            <button
              v-for="(skill, index) in props.skills"
              :key="skill.name"
              class="skill-dot"
              :class="{
                active:
                  props.selectedIndex === index
              }"
              @click="emit('select', index)"
              :aria-label="`View ${skill.name}`"
              :aria-current="
                props.selectedIndex === index
                  ? 'true'
                  : undefined
              "
            ></button>

          </div>


          <!-- NEXT -->
          <button
            class="modal-arrow"
            @click="emit('next')"
            aria-label="Next skill"
          >
            →
          </button>

        </div>

      </div>

    </div>

  </Transition>
</template>

<style scoped>
/*
|--------------------------------------------------------------------------
| MODAL OVERLAY
|--------------------------------------------------------------------------
*/

.skill-modal-overlay {
  position: fixed;

  inset: 0;

  z-index: 9999;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 30px;

  background: rgba(0, 0, 0, 0.72);

  backdrop-filter: blur(10px);
}


/*
|--------------------------------------------------------------------------
| MODAL
|--------------------------------------------------------------------------
*/

.skill-modal {
  position: relative;

  width: min(680px, 100%);

  max-height: 90vh;

  overflow-y: auto;

  padding: 42px;

  background:
    linear-gradient(
      145deg,
      rgba(30, 30, 30, 0.97),
      rgba(8, 8, 8, 0.98)
    );

  border:
    1px solid rgba(255, 255, 255, 0.2);

  box-shadow:
    0 30px 100px rgba(0, 0, 0, 0.8);

  color: white;

  scrollbar-width: thin;
}


/*
|--------------------------------------------------------------------------
| CLOSE
|--------------------------------------------------------------------------
*/

.modal-close {
  position: absolute;

  top: 15px;
  right: 18px;

  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border:
    1px solid rgba(255, 255, 255, 0.25);

  background: transparent;

  color: white;

  font-size: 25px;

  cursor: pointer;

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.modal-close:hover {
  background: white;
  color: black;
}


/*
|--------------------------------------------------------------------------
| HEADER
|--------------------------------------------------------------------------
*/

.modal-header {
  display: flex;

  align-items: center;

  gap: 20px;

  margin-bottom: 35px;
}


.modal-icon {
  width: 75px;
  height: 75px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border:
    1px solid rgba(255, 255, 255, 0.25);

  background:
    rgba(255, 255, 255, 0.04);
}


.modal-icon i {
  font-size: 42px;
}


.custom-modal-icon {
  font-family: monospace;

  font-size: 34px;

  font-weight: 500;
}


.modal-category {
  display: block;

  margin-bottom: 7px;

  font-size: 10px;

  letter-spacing: 3px;

  opacity: 0.5;
}


.modal-header h3 {
  margin: 0;

  font-family:
    'Cormorant Garamond',
    Georgia,
    serif;

  font-size: 34px;

  font-weight: 400;
}


/*
|--------------------------------------------------------------------------
| RATING
|--------------------------------------------------------------------------
*/

.skill-rating {
  margin-bottom: 28px;
}


.rating-header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 10px;

  font-size: 10px;

  letter-spacing: 2px;
}


.rating-header strong {
  font-size: 15px;

  letter-spacing: 0;
}


.rating-bar {
  width: 100%;

  height: 3px;

  overflow: hidden;

  background:
    rgba(255, 255, 255, 0.15);
}


.rating-fill {
  height: 100%;

  background: #ffffff;

  transition:
    width 0.7s ease;
}


/*
|--------------------------------------------------------------------------
| EXPERIENCE
|--------------------------------------------------------------------------
*/

.skill-experience {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  padding: 15px 0;

  border-top:
    1px solid rgba(255, 255, 255, 0.12);

  border-bottom:
    1px solid rgba(255, 255, 255, 0.12);

  margin-bottom: 25px;

  font-size: 11px;

  letter-spacing: 2px;
}


.skill-experience strong {
  font-weight: 500;

  text-align: right;
}


/*
|--------------------------------------------------------------------------
| DESCRIPTION
|--------------------------------------------------------------------------
*/

.skill-description {
  max-width: 580px;

  margin:
    0 0 30px;

  color:
    rgba(255, 255, 255, 0.72);

  font-size: 14px;

  line-height: 1.8;
}


/*
|--------------------------------------------------------------------------
| MAJOR SKILLS
|--------------------------------------------------------------------------
*/

.section-label {
  display: block;

  margin-bottom: 14px;

  font-size: 10px;

  letter-spacing: 3px;

  opacity: 0.5;
}


.skill-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;
}


.skill-tag {
  padding: 8px 12px;

  border:
    1px solid rgba(255, 255, 255, 0.16);

  background:
    rgba(255, 255, 255, 0.04);

  font-size: 11px;

  letter-spacing: 0.5px;
}


/*
|--------------------------------------------------------------------------
| NAVIGATION
|--------------------------------------------------------------------------
*/

.modal-navigation {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  margin-top: 35px;
}


.skill-dots {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  max-width: 420px;

  overflow-x: auto;

  padding: 5px 3px;

  scrollbar-width: none;
}

.skill-dots::-webkit-scrollbar {
  display: none;
}


.skill-dot {
  flex-shrink: 0;

  width: 6px;
  height: 6px;

  padding: 0;

  border: 0;

  border-radius: 50%;

  background:
    rgba(255, 255, 255, 0.3);

  cursor: pointer;

  transition:
    transform 0.3s ease,
    background 0.3s ease;
}


.skill-dot:hover {
  background:
    rgba(255, 255, 255, 0.7);
}


.skill-dot.active {
  background: white;

  transform: scale(1.8);
}


/*
|--------------------------------------------------------------------------
| ARROWS
|--------------------------------------------------------------------------
*/

.modal-arrow {
  flex-shrink: 0;

  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  border:
    1px solid rgba(255, 255, 255, 0.2);

  background: transparent;

  color: white;

  cursor: pointer;

  font-size: 18px;

  transition:
    background 0.3s ease,
    color 0.3s ease;
}


.modal-arrow:hover {
  background: white;

  color: black;
}


/*
|--------------------------------------------------------------------------
| TRANSITION
|--------------------------------------------------------------------------
*/

.skill-modal-enter-active,
.skill-modal-leave-active {
  transition:
    opacity 0.35s ease;
}


.skill-modal-enter-active .skill-modal,
.skill-modal-leave-active .skill-modal {
  transition:
    transform 0.45s ease,
    opacity 0.45s ease;
}


.skill-modal-enter-from,
.skill-modal-leave-to {
  opacity: 0;
}


.skill-modal-enter-from .skill-modal,
.skill-modal-leave-to .skill-modal {
  opacity: 0;

  transform:
    translateY(30px)
    scale(0.97);
}


/*
|--------------------------------------------------------------------------
| MOBILE
|--------------------------------------------------------------------------
*/

@media (max-width: 768px) {

  .skill-modal-overlay {
    padding: 15px;
  }

  .skill-modal {
    width: 100%;

    max-height: 92vh;

    padding:
      30px 22px;
  }

  .modal-header {
    gap: 14px;

    margin-bottom: 28px;
  }

  .modal-header h3 {
    font-size: 26px;
  }

  .modal-icon {
    width: 60px;
    height: 60px;
  }

  .modal-icon i {
    font-size: 32px;
  }

  .custom-modal-icon {
    font-size: 27px;
  }

  .skill-description {
    font-size: 13px;

    line-height: 1.7;
  }

  .skill-tag {
    font-size: 10px;

    padding:
      7px 9px;
  }

  .skill-experience {
    font-size: 9px;

    gap: 12px;
  }

  .modal-navigation {
    gap: 10px;
  }

  .skill-dots {
    gap: 6px;

    max-width: 220px;
  }

  .modal-arrow {
    width: 36px;
    height: 36px;

    font-size: 16px;
  }
}
</style>