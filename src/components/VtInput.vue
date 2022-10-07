<template>
  <span
    ref="line"
    class="vt__line vt__line--input"
    :style="style"
    :vt__prompt="prompt"
    :vt__cursor="cursor"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue"

import { useLine } from "../composables/useLine"
import { termynalContext } from "../injectionKeys"

const props = defineProps({
  lineDelay: { type: Number, default: null, required: false },
  typeDelay: { type: Number, default: null, required: false },
  prompt: { type: String, default: null, required: false },
})

const termynal = inject(termynalContext)!
const { line, visible, style, wait, registerShowFn } = useLine(termynal)

const cursor = ref<string>(termynal.cursor.value)
const removeCursor = () => {
  cursor.value = null
}

const show = async () => {
  const typeDelay = props.typeDelay ?? termynal.typeDelay.value
  const lineDelay = props.lineDelay ?? termynal.lineDelay.value
  const chars = [...line.value.textContent]

  line.value.textContent = ""
  visible.value = true

  for (const char of chars) {
    await wait(typeDelay)
    line.value.textContent += char
  }

  await wait(lineDelay)
  removeCursor()
}

onMounted(() => registerShowFn(show))
</script>
