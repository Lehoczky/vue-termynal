<template>
  <span
    ref="line"
    class="vt__line"
    :style="style"
    :vt__loading-prefix="prefix"
  />
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue"

import { useLine } from "../composables/useLine"
import { termynalContext } from "../injectionKeys"

const props = defineProps({
  lineDelay: { type: Number, default: null, required: false },
  progressLength: { type: Number, default: null, required: false },
  progressChar: { type: String, default: null, required: false },
  progressPercent: { type: Number, default: null, required: false },
  progressDelay: { type: Number, default: null, required: false },
  prefix: { type: String, default: null, required: false },
})

const termynal = inject(termynalContext)
const { line, visible, style, wait, registerShowFn } = useLine(termynal)

const show = async () => {
  const lineDelay = props.lineDelay ?? termynal.lineDelay.value
  const progressLength = props.progressLength ?? termynal.progressLength.value
  const progressChar = props.progressChar ?? termynal.progressChar.value
  const progressPercent =
    props.progressPercent ?? termynal.progressPercent.value
  const progressDelay = props.progressDelay ?? termynal.progressDelay.value

  line.value.textContent = ""
  visible.value = true
  const chars = progressChar.repeat(progressLength)

  for (let i = 1; i < chars.length + 1; i++) {
    await wait(progressDelay)

    const percent = Math.round((i / chars.length) * 100)
    line.value.textContent = `${chars.slice(0, i)} ${percent}%`
    if (percent > progressPercent) {
      break
    }
  }

  await wait(lineDelay)
}

onMounted(() => registerShowFn(show))
</script>
