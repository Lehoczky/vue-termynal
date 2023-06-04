import styleInject from "style-inject"
import type { Plugin } from "vue"

import VTermynal from "./components/VTermynal.vue"
import VtInput from "./components/VtInput.vue"
import VtProgress from "./components/VtProgress.vue"
import VtSpinner from "./components/VtSpinner.vue"
import VtText from "./components/VtText.vue"
import { useTermynalLine } from "./composables/useTermynalLine"
import css from "./css/styles.css?inline"

styleInject(css) // workaround for https://github.com/vitejs/vite/issues/1579

/**
 * Vue plugin definition.
 */
const plugin: Plugin = app => {
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
