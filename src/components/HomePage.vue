<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useBackground } from '../composables/useBackground'

const { background } = useBackground()

const props = defineProps({
  progress: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['goTo'])

const roles = [
  {
    type: 'FRONTEND',
    colorClass: 'frontend'
  },
  {
    type: 'BACKEND',
    colorClass: 'backend'
  },
  {
    type: 'FULL STACK',
    colorClass: 'fullstack'
  }
]

const currentRole = ref(0)
const isAnimating = ref(false)

let interval
let animationTimeout

onMounted(() => {
  interval = setInterval(() => {
    isAnimating.value = true

    animationTimeout = setTimeout(() => {
      currentRole.value =
        (currentRole.value + 1) % roles.length

      isAnimating.value = false
    }, 350)
  }, 2000)
})

onUnmounted(() => {
  clearInterval(interval)
  clearTimeout(animationTimeout)
})
</script>

<template>
  <section
    id="home"
    class="scene home"
    :style="background('portfolio-landing-background')"
  >
    <div class="scene-inner home-layout">

      <div class="copy home-copy">

        <p class="eyebrow">
          TURN IDEAS<br />
          INTO EXPERIENCES
        </p>

        <h1>KRISHNAJITH V</h1>

        <h2
          class="role-title"
          :class="[
            roles[currentRole].colorClass,
            { 'role-exit': isAnimating }
          ]"
        >
          SENIOR
          <span class="role-highlight">
            {{ roles[currentRole].type }}
          </span>
          DEVELOPER
        </h2>

        <p class="lead">
          Crafting modern, scalable and user-focused<br class="desktop" />
          web applications for a better digital tomorrow.
        </p>

        <div class="home-actions">

          <!-- Explore -->
          <button
            class="outline-btn"
            type="button"
            @click="emit('goTo', 1)"
          >
            EXPLORE MY WORLD
            <span>→</span>
          </button>

          <!-- Resume -->
          <a
            href="/resume/Krishnajith_V_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="outline-btn resume-btn"
          >
            VIEW RESUME
            <span>↗</span>
          </a>

        </div>

      </div>

      <div class="scroll-cue">
        SCROLL DOWN
        <b></b>
      </div>

      <div class="counter">
        {{ props.progress }}
      </div>

    </div>
  </section>
</template>

<style scoped>
.home-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 26px;
}

.home-actions .outline-btn {
  margin-top: 0;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
}

.resume-btn {
  background: transparent;
}

.resume-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

/* Mobile */
@media (max-width: 640px) {
  .home-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .home-actions .outline-btn {
    width: auto;
  }
}
</style>