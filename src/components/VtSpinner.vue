<template>
  <span class="vt__line" :style="style" :vt__loading-prefix="prefix">
    <slot />
  </span>
</template>

<script>
import { defineComponent } from "vue"
import { SPINNERS } from "../data/spinners"
import { spinnerTypeValidator } from "../validators"
import TermynalLine from "../mixins/TermynalLineMixin"

export default defineComponent({
  name: "VtSpinner",
  mixins: [TermynalLine],
  props: {
    type: {
      type: String,
      default: null,
      required: false,
      validator: spinnerTypeValidator,
    },
    frameDelay: { type: Number, default: null, required: false },
    duration: { type: Number, default: null, required: false },
    prefix: { type: String, default: null, required: false },
  },
  methods: {
    async show() {
      const lineDelay = this.lineDelay ?? this.$parent.lineDelay
      const spinnerType = this.type ?? this.$parent.spinnerType
      const frameDelay = this.frameDelay ?? this.$parent.spinnerFrameDelay
      const duration = this.duration ?? this.$parent.spinnerDuration

      const frames = SPINNERS[spinnerType]
      const iterations = Math.round((duration * 1000) / frameDelay)

      this.$el.textContent = ""
      this.visible = true

      for (let i = 0; i < iterations; i++) {
        await this.wait(frameDelay)

        const nextFrame = i % frames.length
        this.$el.textContent = frames[nextFrame]
      }

      await this.wait(lineDelay)
    },
  },
})
</script>
