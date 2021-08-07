<template>
  <termynal>
    <termynal-text>Successfully installed spacy</termynal-text>
    <termynal-text :line-delay="0">Successfully installed spacy</termynal-text>
    <termynal-progress />
    <termynal-input>Successfully installed spacy</termynal-input>
    <termynal-input :prompt="'>>>'">
      Successfully installed spacy
    </termynal-input>
    <termynal-input :prompt="'^'">Successfully installed spacy</termynal-input>
  </termynal>
</template>

<script>
import { defineComponent } from "vue"
import { Termynal, TermynalText } from "../src/"
import TermynalInput from "../src/TermynalInput.vue"
import TermynalProgress from "../src/TermynalProgress.vue"

export default defineComponent({
  name: "App",
  components: { Termynal, TermynalText, TermynalProgress, TermynalInput },
})
</script>

<style></style>
