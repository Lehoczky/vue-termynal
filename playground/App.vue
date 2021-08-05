<template>
  <termynal>
    <termynal-text>Successfully installed spacy</termynal-text>
  </termynal>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {
  Termynal,
  TermynalInput,
  TermynalProgress,
  TermynalText,
} from "../src/"

export default defineComponent({
  name: "App",
  components: { Termynal, TermynalInput, TermynalProgress, TermynalText },
})
</script>

<style>
</style>
