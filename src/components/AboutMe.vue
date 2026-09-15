 <script setup>
    import { useBackground } from '../composables/useBackground'
    import { defineEmits, defineProps } from 'vue'
    const { background } = useBackground()
    const props = defineProps({
        progress: {
            type: String,
            required: true
        }
    })
    const emit = defineEmits(['goTo'])
</script>

<template>
    <section id="about" class="scene about " :style="background('portfolio-about-background')">
      <div class="scene-inner split-layout">
        <div class="copy">
          <p class="eyebrow"><span>ABOUT ME</span></p>
          <div class="tiny-rule"></div>
          <h2>A DEVELOPER<br />WHO EXPLORES</h2>
          <p class="lead">I’m Krishnajith V, a Senior Full Stack Developer <br class="desktop" />with a passion for building meaningful digital <br class="desktop" />experiences. I enjoy turning complex problems <br class="desktop" />into simple, scalable and intuitive solutions.</p>
          <button class="outline-btn" @click="emit('goTo', 2)">KNOW MORE <span>→</span></button>
        </div>
        <div class="side-words">CURIOUS<br />CREATIVE<br />FOCUSED<br />ALWAYS<br />LEARNING</div>
        <div class="counter">{{ props.progress }}</div>
      </div>
    </section>

</template>