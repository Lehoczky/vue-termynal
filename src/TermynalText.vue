<template>
  <span v-show="visible" class="termynal-line">
    <slot />
  </span>
</template>

<script>
import { defineComponent } from "vue"
import { wait } from "./utils"

export default defineComponent({
  name: "TermynalText",
  props: {
    lineDelay: { type: Number, default: null, required: false },
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
      this.visible = true

      await wait(delay)
    },
  },
})
</script>
