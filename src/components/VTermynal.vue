<template>
  <div class="v-termynal">
    <forward-button
      v-if="forwardButton"
      :visible="showForwardButton"
      @click="doFastForward()"
    />

    <slot />

    <restart-button
      v-if="restartButton"
      :visible="showRestartButton"
      @click="restart()"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue"
import { spinnerTypeValidator } from "../validators"
import ForwardButton from "./_ForwardButton.vue"
import RestartButton from "./_RestartButton.vue"
import IntersectionObserver from "../mixins/IntersectionObserverMixin"
import { wait } from "../utils"

export default defineComponent({
  components: { ForwardButton, RestartButton },
  mixins: [IntersectionObserver],
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
    /** Type of each spinner, defaults to `dots`. */
    spinnerType: {
      type: String,
      default: "dots",
      required: false,
      validator: spinnerTypeValidator,
    },
    /** Delay between each spinner frame, in ms. */
    spinnerFrameDelay: { type: Number, default: 80, required: false },
    /** Seconds to wait before finishing each spinner's animation. */
    spinnerDuration: { type: Number, default: 1.5, required: false },
    /** Character to use for cursor, defaults to ▋. */
    cursor: { type: String, default: "▋", required: false },
    /** Only start the animation when the terminal enters the viewport. */
    lazy: { type: Boolean, default: false, required: false },
    /** Whether to a show the fast forward button. */
    forwardButton: { type: Boolean, default: false, required: false },
    /** Whether to a show the restart button. */
    restartButton: { type: Boolean, default: false, required: false },
  },
  emits: ["start", "before-new-line", "fast-forward", "finish", "restart"],
  data() {
    return {
      lines: [],
      started: false,
      fastForward: false,
      finished: false,
    }
  },
  computed: {
    showRestartButton() {
      return this.restartButton && this.finished
    },
    showForwardButton() {
      return (
        this.forwardButton &&
        this.started &&
        !this.finished &&
        !this.fastForward
      )
    },
  },
  watch: {
    started(newValue) {
      if (newValue) {
        this.$emit("start")
      }
    },
    fastForward(newValue) {
      if (newValue) {
        this.$emit("fast-forward")
      }
    },
    finished(newValue) {
      if (newValue) {
        this.$emit("finish")
      }
    },
  },
  mounted() {
    if (this.lazy) {
      this.setupIntersectionObserver()
    } else {
      this.start()
    }
  },
  methods: {
    async start() {
      this.started = true
      await wait(this.startDelay)

      for (const line of this.lines) {
        this.$emit("before-new-line", line.$el)
        await line.show()
      }
      this.finished = true
    },
    restart() {
      this.fastForward = false
      this.finished = false

      for (const line of this.lines) {
        line.hide()
      }

      this.$emit("restart")
      this.start()
    },
    doFastForward() {
      this.fastForward = true
    },
    setupIntersectionObserver() {
      this.observe(entries => {
        const isIntersecting = entries.some(entry => entry.isIntersecting)
        if (isIntersecting) {
          this.start()
          this.unobserve()
        }
      })
    },
  },
})
</script>
