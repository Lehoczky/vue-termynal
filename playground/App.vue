<template>
  <v-termynal
    :type-delay="40"
    :line-delay="700"
    forward-button
    restart-button
    @before-new-line="scrollToNewLine($event)"
    @restart="scrollToTop()"
  >
    <div ref="container" class="line-container">
      <vt-input prompt="▲">npm uninstall react</vt-input>
      <vt-text>Are you sure you want to uninstall 'react'?</vt-text>
      <vt-input prompt="(y/n)" :type-delay="1000">y</vt-input>
      <vt-progress progress-char="·" />
      <vt-text>Uninstalled 'react'</vt-text>
      <vt-input prompt="▲">node</vt-input>
      <vt-input prompt=">">Array(5).fill('🦄 ')</vt-input>
      <vt-text>['🦄', '🦄', '🦄', '🦄', '🦄']</vt-text>
      <vt-input prompt="▲">cd ~/repos</vt-input>
      <vt-input prompt="▲  ~/repos">git checkout branch master</vt-input>
      <vt-input prompt="▲  ~/repos (master)"
        >git commit -m "Fix things"</vt-input
      >
    </div>
  </v-termynal>
</template>

<script>
import { defineComponent } from "vue"
import { VTermynal, VtInput, VtProgress, VtText } from "../src"

export default defineComponent({
  components: { VTermynal, VtInput, VtProgress, VtText },
  methods: {
    scrollToNewLine(line) {
      const containerElement = this.$refs.container

      if (line.offsetTop - line.offsetHeight > containerElement.offsetHeight) {
        containerElement.scrollTo({
          top:
            line.offsetTop - line.offsetHeight - containerElement.offsetHeight,
          behavior: "smooth",
        })
      }
    },
    scrollToTop() {
      this.$refs.container.scrollTo({ top: 0 })
    },
  },
})
</script>

<style>
.line-container {
  height: 100px;
  overflow: hidden;
}
</style>
