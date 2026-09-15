 <script setup>
    import { defineEmits, defineProps } from 'vue'
    const props = defineProps({
        current: {
            type: Number,
            required: true
        },
        isMobileNavOpen: {
            type: Boolean,
            required: true
        },
        sections: {
            type: Array,
            required: true
        }
    })
    
    const emit = defineEmits(['goTo','update:isMobileNavOpen'])
</script>

<template>
    <nav class="nav">
      <button class="brand" @click="emit('goTo', 0)" aria-label="Go to home">KV</button>

      <button class="menu-toggle" @click="emit('update:isMobileNavOpen', !props.isMobileNavOpen)" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>

      <div class="nav-links" :class="{ open: props.isMobileNavOpen }">
        <button
          v-for="(section, index) in props.sections"
          :key="section.id"
          :class="{ active: props.current === index }"
          @click="emit('goTo', index)"
        >{{ section.label }}</button>
      </div>
    </nav>
</template>