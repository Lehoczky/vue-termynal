import styleInject from "style-inject"
import css from "./css/styles.css"
styleInject(css) // workaround for https://github.com/vitejs/vite/issues/1579

export { default as VTermynal } from "./components/VTermynal.vue"
export { default as VtInput } from "./components/VtInput.vue"
export { default as VtProgress } from "./components/VtProgress.vue"
export { default as VtSpinner } from "./components/VtSpinner.vue"
export { default as VtText } from "./components/VtText.vue"
