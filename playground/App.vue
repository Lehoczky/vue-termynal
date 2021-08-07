<template>
  <v-termynal :type-delay="40" :line-delay="700">
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
    <vt-input prompt="▲  ~/repos (master)">git commit -m "Fix things"</vt-input>
  </v-termynal>
</template>

<script>
import { defineComponent } from "vue"
import { VTermynal, VtInput, VtProgress, VtText } from "../src"

export default defineComponent({
  components: { VTermynal, VtInput, VtProgress, VtText },
})
</script>

<style>
/* :root {
  --vt-color-bg: #ddd;
  --vt-color-text: #1a1e24;
  --vt-color-text-subtle: #d76d77;
} */
</style>
