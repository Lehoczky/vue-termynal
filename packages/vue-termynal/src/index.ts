import "./css/styles.css"

import type { Plugin } from "vue"

import VTermynal from "./components/VTermynal.vue"
import VtInput from "./components/VtInput.vue"
import VtProgress from "./components/VtProgress.vue"
import VtSpinner from "./components/VtSpinner.vue"
import VtText from "./components/VtText.vue"
import { useTermynalLine } from "./composables/useTermynalLine"

/**
 * Vue plugin definition.
 */
const plugin: Plugin = (app) => {
  app.component("VTermynal", VTermynal)
  app.component("VtInput", VtInput)
  app.component("VtProgress", VtProgress)
  app.component("VtSpinner", VtSpinner)
  app.component("VtText", VtText)
}

export {
  plugin as default,
  VTermynal,
  VtInput,
  VtProgress,
  VtSpinner,
  VtText,
  useTermynalLine,
}
