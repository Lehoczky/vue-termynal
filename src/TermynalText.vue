<template>
  <span v-show="visible" class="termynal-line">
    <slot />
  </span>
</template>

<script>
import { defineComponent } from "vue"
import TermynalLine from "./TermynalLineMixin"
import { wait } from "./utils"

export default defineComponent({
  name: "TermynalText",
  mixins: [TermynalLine],
  methods: {
    async show() {
      const delay = this.lineDelay ?? this.$parent.lineDelay
      this.visible = true

      await wait(delay)
    },
  },
})
</script>
