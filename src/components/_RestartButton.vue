<template>
  <button class="vt__button" :style="style" @click="$emit('click')">
    restart ↻
  </button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import ButtonMixin from "../mixins/ButtonMixin"

export default defineComponent({
  name: "RestartButton",
  mixins: [ButtonMixin],
  emits: ["click"],
})
</script>
