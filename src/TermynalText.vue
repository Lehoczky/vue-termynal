<template>
  <span class="termynal-line">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "TermynalText",
})
</script>
