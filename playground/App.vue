<template>
  <termynal>
    <termynal-text>Successfully installed spacy</termynal-text>
    <termynal-text :lineDelay="0">Successfully installed spacy</termynal-text>
    <termynal-text>Successfully installed spacy</termynal-text>
    <termynal-text>Successfully installed spacy</termynal-text>
    <termynal-text>Successfully installed spacy</termynal-text>
    <termynal-text>Successfully installed spacy</termynal-text>
  </termynal>
</template>

<script>
import { defineComponent } from "vue"
import { Termynal, TermynalText } from "../src/"

export default defineComponent({
  name: "App",
  components: { Termynal, TermynalText },
})
</script>

<style>
</style>
