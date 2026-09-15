<script setup>
import { useBackground } from '../composables/useBackground'
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  ArrowRight
} from 'lucide-vue-next'

const { background } = useBackground()

defineProps({
  progress: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section
    id="contact"
    class="scene contact"
    :style="background('portfolio-contact-background')"
  >
    <div class="scene-inner contact-layout">

      <div class="copy">
        <p class="eyebrow">
          <span>CONTACT</span>
        </p>

        <h2>
          LET’S BUILD<br />
          SOMETHING GREAT
        </h2>

        <p class="lead">
          Open to exciting opportunities and
          <br class="desktop" />
          collaborations. Feel free to reach out.
        </p>

        <div class="contacts">

          <!-- Email -->
          <a href="mailto:krishnajith.career@gmail.com">
            <Mail class="contact-icon" />
            <span>krishnajith.career@gmail.com</span>
            <ArrowRight class="contact-arrow" />
          </a>

          <!-- Location / Work Preference -->
          <a href="#">
            <MapPin class="contact-icon" />
            <span>Open to Remote / Onsite</span>
            <ArrowRight class="contact-arrow" />
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/krishnajith-career/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin class="contact-icon" />
            <span>linkedin.com/in/krishnajith-career</span>
            <ArrowRight class="contact-arrow" />
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/krishnajith-career"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github class="contact-icon" />
            <span>github.com/krishnajith-career</span>
            <ArrowRight class="contact-arrow" />
          </a>

        </div>
      </div>

      <div class="contact-quote">
        “GOOD IDEAS<br />
        ALWAYS FIND<br />
        A WAY...”
        <div class="quote-line">—　—</div>
        <div class="signature">
            <svg
                viewBox="0 0 520 150"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Krishnajith V signature"
            >
            <!-- K -->
            <path
                class="signature-stroke stroke-1"
                d="M55 120
                C65 90 75 55 95 20
                C105 5 110 10 103 25
                C90 52 72 88 55 120
                M78 65
                C105 48 125 35 143 22
                M80 65
                C100 70 120 82 140 91"
            />

            <!-- rishnaj -->
            <path
                class="signature-stroke stroke-2"
                d="M130 78
                C138 60 145 55 150 77
                C157 60 165 55 170 70
                C176 82 185 84 194 72
                C202 61 210 62 207 76
                C204 90 216 92 225 78
                C235 62 245 62 241 78
                C238 92 250 93 261 77
                C271 62 279 63 275 78
                C271 93 283 96 294 80"
            />

            <!-- jith -->
            <path
                class="signature-stroke stroke-3"
                d="M292 77
                C301 58 309 55 306 76
                C302 101 292 125 283 132
                C275 138 270 132 277 125
                C286 115 299 108 313 105
                C326 102 337 94 342 78
                C348 60 357 59 354 78
                C351 96 362 99 373 82
                C382 68 390 67 388 82
                C386 96 398 98 409 83"
            />

            <!-- V -->
            <path
                class="signature-stroke stroke-4"
                d="M405 38
                C414 58 422 83 430 106
                C438 88 450 61 467 30
                C477 12 482 16 474 34"
            />

            <!-- Signature underline -->
            <path
                class="signature-stroke stroke-5"
                d="M70 126
                C145 118 220 116 292 116
                C365 116 430 114 485 105"
            />
            </svg>
        </div>
      </div>
      <div class="counter">
        {{ progress }}
      </div>

    </div>
  </section>
</template>