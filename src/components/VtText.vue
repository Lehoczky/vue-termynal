<template>
  <span ref="line" class="vt__line" :style="style">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { onMounted, inject } from "vue"
import { termynalContext } from "../injectionKeys"
import { useLine } from "../composables/useLine"

const props = defineProps({
  lineDelay: { type: Number, default: null, required: false },
})

const termynal = inject(termynalContext)
const { line, visible, style, wait, registerShowFn } = useLine(termynal)

const show = async () => {
  const delay = props.lineDelay ?? termynal.lineDelay.value
  visible.value = true

  await wait(delay)
}

onMounted(() => registerShowFn(show))
</script>
