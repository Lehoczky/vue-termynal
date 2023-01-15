<template>
  <div>
    <button class="button my-5" @click="toggleTermynal">
      {{ buttonText }}
    </button>

    <v-termynal v-if="showTermynal" forward-button restart-button>
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
    </v-termynal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

const showTermynal = ref(true)

function toggleTermynal() {
  showTermynal.value = !showTermynal.value
}
const buttonText = computed(() =>
  showTermynal.value ? "Unmount Termynal" : "Mount Termynal"
)
</script>
