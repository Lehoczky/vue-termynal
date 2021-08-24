<template>
  <button class="vt__button" @click="$emit('click')">restart ↻</button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "RestartButton",
  emits: ["click"],
})
</script>
