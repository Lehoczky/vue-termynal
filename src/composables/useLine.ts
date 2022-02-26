import { computed, ref, StyleValue } from "vue"
import { TermynalState } from "../interfaces/termynalState"
import { wait as _wait } from "../utils"

export function useLine(termynal: TermynalState) {
  const line = ref<HTMLElement>()
  const visible = ref(false)

  const style = computed<StyleValue | null>(() => {
    return visible.value ? null : { visibility: "hidden" }
  })

  const hide = () => (visible.value = false)
  const wait = (time: number) => {
    return termynal.fastForward.value ? _wait(0) : _wait(time)
  }

  const registerShowFn = (showFn: () => Promise<void>) => {
    termynal.registerLine({
      element: line.value!,
      show: showFn,
      hide,
    })
  }

  return {
    line,
    visible,
    style,
    wait,
    registerShowFn,
  }
}
