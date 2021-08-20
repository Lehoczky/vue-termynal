import { defineComponent } from "vue"

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
      const fixedHeight = this.$parent.fixedHeight
      const hiddenStyles = fixedHeight
        ? { visibility: "hidden" }
        : { display: "none" }

      return this.hidden ? hiddenStyles : null
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
  },
})
