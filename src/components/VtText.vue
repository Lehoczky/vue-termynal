<template>
  <span ref="line" class="vt__line" :style="style">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import { useTermynalLine } from "../composables/useTermynalLine"

const props = defineProps({
  lineDelay: { type: Number, default: null, required: false },
})

const line = ref<HTMLElement | null>(null)
const { termynal, visible, style, wait, registerShowFn } = useTermynalLine(line)

const show = async () => {
  const delay = props.lineDelay ?? termynal.lineDelay.value
  visible.value = true

  await wait(delay)
}

onMounted(() => registerShowFn(show))
</script>
