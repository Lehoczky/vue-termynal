<template>
  <button class="vt__button" @click="$emit('click')">fast forward →</button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "ForwardButton",
  emits: ["click"],
})
</script>
