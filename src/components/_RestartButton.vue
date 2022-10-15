<template>
  <button class="vt__button" :style="style" @click="$emit('click')">
    restart ↻
  </button>
</template>

<script setup lang="ts">
import type { StyleValue } from "vue"
import { computed } from "vue"

const props = defineProps({
  visible: { type: Boolean, required: true },
})

defineEmits<{
  (event: "click"): void
}>()

const style = computed<StyleValue>(() => {
  return props.visible ? {} : { visibility: "hidden" }
})
</script>
