<script setup lang="ts">
import { onMounted, ref } from "vue"

import { useTermynalLine } from "../composables/useTermynalLine"

const props = defineProps({
  lineDelay: { type: Number, default: null, required: false },
  typeDelay: { type: Number, default: null, required: false },
  prompt: { type: String, default: null, required: false },
})

const line = ref<HTMLElement | null>(null)
const { termynal, visible, style, wait, registerShowFn } = useTermynalLine(line)

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
    if (!line.value) {
      return
    }
    line.value.textContent += char
  }

  await wait(lineDelay)
  removeCursor()
}

onMounted(() => registerShowFn(show))
</script>

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
