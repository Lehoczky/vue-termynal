<template>
  <span
    v-show="visible"
    class="termynal-line input"
    :t-prompt="prompt"
    :t-cursor="cursor"
  >
    <slot />
  </span>
</template>

<script>
import { defineComponent } from "vue"
import { wait } from "./utils"

export default defineComponent({
  name: "TermynalInput",
  props: {
    typeDelay: { type: Number, default: null, required: false },
    lineDelay: { type: Number, default: null, required: false },
    prompt: { type: String, default: null, required: false },
  },
  data() {
    return {
      visible: false,
      cursor: this.$parent.cursor,
    }
  },
  mounted() {
    this.$parent.lines.push(this)
  },
  methods: {
    async show() {
      const typeDelay = this.typeDelay ?? this.$parent.typeDelay
      const lineDelay = this.lineDelay ?? this.$parent.lineDelay
      const chars = [...this.$el.textContent]

      this.$el.textContent = ""
      this.visible = true

      for (let char of chars) {
        await wait(typeDelay)
        this.$el.textContent += char
      }

      await wait(lineDelay)
      this.removeCursor()
    },
    removeCursor() {
      this.cursor = null
    },
  },
})
</script>
