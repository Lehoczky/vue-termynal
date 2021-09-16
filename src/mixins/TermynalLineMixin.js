import { defineComponent } from "vue"
import { wait } from "../utils"

export default defineComponent({
  props: {
    lineDelay: { type: Number, default: null, required: false },
  },
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    style() {
      return this.hidden ? { visibility: "hidden" } : null
    },
    hidden() {
      return !this.visible
    },
  },
  mounted() {
    this.$parent.lines.push(this)
  },
  methods: {
    hide() {
      this.visible = false
    },
    async wait(time) {
      if (this.$parent.fastForward) {
        return wait(0)
      }
      return wait(time)
    },
  },
})
