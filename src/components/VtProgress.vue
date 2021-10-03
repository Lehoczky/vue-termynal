<template>
  <span class="vt__line" :style="style" :vt__loading-prefix="prefix" />
</template>

<script>
import { defineComponent } from "vue"
import TermynalLine from "../mixins/TermynalLineMixin"

export default defineComponent({
  name: "VtProgress",
  mixins: [TermynalLine],
  props: {
    progressUnknown: { type: Boolean, default: false, required: false },
    progressLength: { type: Number, default: null, required: false },
    progressChar: { type: String, default: null, required: false },
    progressPercent: { type: Number, default: null, required: false },
    progressDelay: { type: Number, default: null, required: false },
    prefix: { type: String, default: null, required: false },
  },
  methods: {
    async show() {
      const lineDelay = this.lineDelay ?? this.$parent.lineDelay
      const progressLength = this.progressLength ?? this.$parent.progressLength
      const progressChar = this.progressChar ?? this.$parent.progressChar
      const progressPercent =
        this.progressPercent ?? this.$parent.progressPercent
      const progressDelay = this.progressDelay ?? this.$parent.progressDelay
      const unknownProgressChars = "⡀⡄⡆⡇⡏⡟⡿⣿⢿⢻⢹⢸⢰⢠⢀"
      const currentContent = this.$el.textContent
      this.$el.textContent = ""
      this.visible = true
      const chars = progressChar.repeat(progressLength)

      for (let i = 1; i < chars.length + 1; i++) {
        await this.wait(progressDelay)

        const percent = Math.round((i / chars.length) * 100)
        if (this.progressUnknown == false) {
          this.$el.textContent = `${currentContent} ${chars.slice(
            0,
            i
          )} ${percent}%`
        } else {
          this.$el.textContent =
            currentContent +
            " " +
            unknownProgressChars.charAt(i % unknownProgressChars.length)
        }
        if (percent > progressPercent) {
          break
        }
      }

      await this.wait(lineDelay)
    },
  },
})
</script>
