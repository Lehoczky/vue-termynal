<template>
  <div class="v-termynal">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue"
import { wait } from "../utils"

export default defineComponent({
  props: {
    /** Delay before animation, in ms. */
    startDelay: { type: Number, default: 600, required: false },
    /** Delay between each typed character, in ms. */
    typeDelay: { type: Number, default: 90, required: false },
    /** Delay between each line, in ms. */
    lineDelay: { type: Number, default: 1500, required: false },
    /** Number of characters displayed as progress bar. */
    progressLength: { type: Number, default: 40, required: false },
    /** Character to use for progress bar, defaults to █. */
    progressChar: { type: String, default: "█", required: false },
    /** Max percent of progress. */
    progressPercent: { type: Number, default: 100, required: false },
    /** Delay between each progress character, in ms. */
    progressDelay: { type: Number, default: 90, required: false },
    /** Character to use for cursor, defaults to ▋. */
    cursor: { type: String, default: "▋", required: false },
    /**  Don't initialise the animation. */
    noInit: { type: Boolean, default: false, required: false },
    loop: { type: Boolean, default: false, required: false },
    loopDelay: { type: Number, default: 2500, required: false },
  },
  data() {
    return {
      lines: [],
    }
  },
  mounted() {
    if (this.noInit) {
      return
    }
    this.start()
  },
  methods: {
    async start() {
      await wait(this.startDelay)

      for (const line of this.lines) {
        await line.show()
      }

      if (this.loop) {
        await wait(this.loopDelay)
        this.restart()
      }
    },
    async restart() {
      for (const line of this.lines) {
        line.hide()
      }
      this.start()
    },
  },
})
</script>
