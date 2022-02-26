<template>
  <div ref="root" class="v-termynal">
    <forward-button
      v-if="forwardButton"
      :visible="showForwardButton"
      @click="doFastForward()"
    />

    <slot />

    <restart-button
      v-if="restartButton"
      :visible="showRestartButton"
      @click="restart()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, provide, toRefs } from "vue"
import ForwardButton from "./_ForwardButton.vue"
import RestartButton from "./_RestartButton.vue"
import { spinnerTypeValidator } from "../validators"
import { wait } from "../utils"
import { useIntersectionObserver } from "../composables/useIntersectionObserver"
import { termynalContext } from "../injectionKeys"
import { Line } from "../interfaces/line"

const props = defineProps({
  /** Delay before animation, in ms. */
  startDelay: { type: Number, default: 600, required: false },
  /** Delay between each typed character, in ms. */
  typeDelay: { type: Number, default: 90, required: false },
  /** Delay between each line, in ms. */
  lineDelay: { type: Number, default: 1500, required: false },
  /** Number of characters displayed as progress bar. */
  progressLength: { type: Number, default: 40, required: false },
  /** Character to use for progress bar, defaults to █. */
  progressChar: { type: String, default: "█", required: false },
  /** Max percent of progress. */
  progressPercent: { type: Number, default: 100, required: false },
  /** Delay between each progress character, in ms. */
  progressDelay: { type: Number, default: 90, required: false },
  /** Type of each spinner, defaults to `dots`. */
  spinnerType: {
    type: String,
    default: "dots",
    required: false,
    validator: spinnerTypeValidator,
  },
  /** Delay between each spinner frame, in ms. */
  spinnerFrameDelay: { type: Number, default: 80, required: false },
  /** Seconds to wait before finishing each spinner's animation. */
  spinnerDuration: { type: Number, default: 1.5, required: false },
  /** Character to use for cursor, defaults to ▋. */
  cursor: { type: String, default: "▋", required: false },
  /** Only start the animation when the terminal enters the viewport. */
  lazy: { type: Boolean, default: false, required: false },
  /** Whether to a show the fast forward button. */
  forwardButton: { type: Boolean, default: false, required: false },
  /** Whether to a show the restart button. */
  restartButton: { type: Boolean, default: false, required: false },
})

const emit = defineEmits<{
  (event: "start"): void
  (event: "before-new-line", line: HTMLElement): void
  (event: "fast-forward"): void
  (event: "finish"): void
  (event: "restart"): void
}>()

const lines = ref<Line[]>([])
const started = ref(false)
const fastForward = ref(false)
const finished = ref(false)

provide(termynalContext, {
  ...toRefs(props),
  fastForward,
  registerLine: line => lines.value.push(line),
})

const showRestartButton = computed(() => {
  return props.restartButton && finished.value
})
const showForwardButton = computed(() => {
  return (
    props.forwardButton &&
    started.value &&
    !finished.value &&
    !fastForward.value
  )
})

watch(started, newValue => {
  if (newValue) {
    emit("start")
  }
})
watch(fastForward, newValue => {
  if (newValue) {
    emit("fast-forward")
  }
})
watch(finished, newValue => {
  if (newValue) {
    emit("finish")
  }
})

const start = async () => {
  started.value = true
  await wait(props.startDelay)

  for (const line of lines.value) {
    emit("before-new-line", line.element)
    await line.show()
  }
  finished.value = true
}

const restart = () => {
  fastForward.value = false
  finished.value = false

  for (const line of lines.value) {
    line.hide()
  }

  emit("restart")
  start()
}

const doFastForward = () => {
  fastForward.value = true
}

const setupIntersectionObserver = () => {
  const root = ref<HTMLDivElement>()
  const { stopObserving } = useIntersectionObserver(root, entries => {
    const isIntersecting = entries.some(entry => entry.isIntersecting)
    if (isIntersecting) {
      start()
      stopObserving()
    }
  })
}

onMounted(() => {
  if (props.lazy) {
    setupIntersectionObserver()
  } else {
    start()
  }
})
</script>
