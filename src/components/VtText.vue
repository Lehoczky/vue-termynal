<template>
  <span class="vt__line" :style="style">
    <slot />
  </span>
</template>

<script>
import { defineComponent } from "vue"
import TermynalLine from "../mixins/TermynalLineMixin"

export default defineComponent({
  name: "VtText",
  mixins: [TermynalLine],
  methods: {
    async show() {
      const delay = this.lineDelay ?? this.$parent.lineDelay
      this.visible = true

      await this.wait(delay)
    },
  },
})
</script>
