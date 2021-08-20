<template>
  <span class="vt__line" :style="style"></span>
</template>

<script>
import { defineComponent } from "vue"
import TermynalLine from "../mixins/TermynalLineMixin"
import { wait } from "../utils"

export default defineComponent({
  name: "VtProgress",
  mixins: [TermynalLine],
  props: {
    progressLength: { type: Number, default: null, required: false },
    progressChar: { type: String, default: null, required: false },
    progressPercent: { type: Number, default: null, required: false },
    progressDelay: { type: Number, default: null, required: false },
  },
  methods: {
    async show() {
      const lineDelay = this.lineDelay ?? this.$parent.lineDelay
      const progressLength = this.progressLength ?? this.$parent.progressLength
      const progressChar = this.progressChar ?? this.$parent.progressChar
      const progressPercent =
        this.progressPercent ?? this.$parent.progressPercent
      const progressDelay = this.progressDelay ?? this.$parent.progressDelay

      this.visible = true
      const chars = progressChar.repeat(progressLength)

      for (let i = 1; i < chars.length + 1; i++) {
        await wait(progressDelay)

        const percent = Math.round((i / chars.length) * 100)
        this.$el.textContent = `${chars.slice(0, i)} ${percent}%`
        if (percent > progressPercent) {
          break
        }
      }

      await wait(lineDelay)
    },
  },
})
</script>
