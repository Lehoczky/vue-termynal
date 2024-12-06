<script setup lang="ts">
import type { PropType } from "vue"
import { ref } from "vue"
import { onMounted } from "vue"

import { useTermynalLine } from "../composables/useTermynalLine"
import { SPINNERS } from "../data/spinners"
import { spinnerTypeValidator } from "../validators"

const props = defineProps({
  lineDelay: { type: Number, default: null, required: false },
  type: {
    type: String as PropType<keyof typeof SPINNERS>,
    default: null,
    required: false,
    validator: spinnerTypeValidator,
  },
  frameDelay: { type: Number, default: null, required: false },
  duration: { type: Number, default: null, required: false },
  prefix: { type: String, default: null, required: false },
})

const line = ref<HTMLElement | null>(null)
const { termynal, visible, style, wait, registerShowFn } = useTermynalLine(line)

const show = async () => {
  const lineDelay = props.lineDelay ?? termynal.lineDelay.value
  const spinnerType = props.type ?? termynal.spinnerType.value
  const frameDelay = props.frameDelay ?? termynal.spinnerFrameDelay.value
  const duration = props.duration ?? termynal.spinnerDuration.value

  const frames = SPINNERS[spinnerType]
  const iterations = Math.round((duration * 1000) / frameDelay)

  line.value.textContent = ""
  visible.value = true

  for (let i = 0; i < iterations; i++) {
    await wait(frameDelay)
    if (!line.value) {
      return
    }

    const nextFrame = i % frames.length
    line.value.textContent = frames[nextFrame]
  }

  await wait(lineDelay)
}

onMounted(() => registerShowFn(show))
</script>

<template>
  <span ref="line" class="vt__line" :style="style" :vt__loading-prefix="prefix">
    <slot />
  </span>
</template>
