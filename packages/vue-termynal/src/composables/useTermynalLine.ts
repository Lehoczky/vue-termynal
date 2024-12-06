import type { Ref, StyleValue } from "vue"
import { inject } from "vue"
import { computed, ref } from "vue"

import { termynalContext } from "../injectionKeys"
import { wait as _wait } from "../utils"

export function useTermynalLine(lineElement: Ref<HTMLElement | null>) {
  const termynal = inject(termynalContext)
  if (!termynal) {
    console.error(
      "[VTermynal] Termynal line cannot be used outside of a VTermynal component",
    )
  }

  const visible = ref(false)
  const hide = () => (visible.value = false)

  const style = computed<StyleValue>(() => {
    return visible.value ? {} : { visibility: "hidden" }
  })

  const wait = (time: number) => {
    return termynal.fastForward.value ? _wait(0) : _wait(time)
  }

  const registerShowFn = (showFn: () => Promise<void>) => {
    termynal.registerLine({
      element: lineElement.value!,
      show: () => (lineElement.value ? showFn() : Promise.resolve()),
      hide,
    })
  }

  return {
    termynal,
    visible,
    style,
    wait,
    registerShowFn,
  }
}
