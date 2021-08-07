<template>
  <span v-show="visible" class="termynal-line"></span>
</template>

<script>
import { defineComponent } from "vue"
import { wait } from "./utils"

export default defineComponent({
  name: "TermynalProgress",
  props: {
    lineDelay: { type: Number, default: null, required: false },
    progressLength: { type: Number, default: null, required: false },
    progressChar: { type: String, default: null, required: false },
    progressPercent: { type: Number, default: null, required: false },
  },
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    this.$parent.lines.push(this)
  },
  methods: {
    async show() {
      const delay = this.lineDelay ?? this.$parent.lineDelay
      const progressLength = this.progressLength ?? this.$parent.progressLength
      const progressChar = this.progressChar ?? this.$parent.progressChar
      const progressPercent =
        this.progressPercent ?? this.$parent.progressPercent

      this.visible = true
      const chars = progressChar.repeat(progressLength)

      for (let i = 1; i < chars.length + 1; i++) {
        await wait(this.typeDelay)

        const percent = Math.round((i / chars.length) * 100)
        this.$el.textContent = `${chars.slice(0, i)} ${percent}%`
        if (percent > progressPercent) {
          break
        }
      }

      await wait(delay)
    },
  },
})
</script>
