<template>
  <button class="vt__button" :style="style" @click="$emit('click')">
    fast forward →
  </button>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue"

const props = defineProps({
  visible: { type: Boolean, required: true },
})

defineEmits(["click"])

const style = computed<StyleValue>(() => {
  return props.visible ? {} : { visibility: "hidden" }
})
</script>
