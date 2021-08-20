<template>
  <span
    class="vt__line vt__line--input"
    :style="style"
    :vt__prompt="prompt"
    :vt__cursor="cursor"
  >
    <slot />
  </span>
</template>

<script>
import { defineComponent } from "vue"
import TermynalLine from "../mixins/TermynalLineMixin"
import { wait } from "../utils"

export default defineComponent({
  name: "VtlInput",
  mixins: [TermynalLine],
  props: {
    typeDelay: { type: Number, default: null, required: false },
    prompt: { type: String, default: null, required: false },
  },
  data() {
    return {
      cursor: this.$parent.cursor,
    }
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
