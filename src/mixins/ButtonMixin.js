import { defineComponent } from "vue"

export default defineComponent({
  props: {
    visible: { type: Boolean, required: true },
  },
  computed: {
    style() {
      const hiddenStyles = this.$parent.fixedHeight
        ? { visibility: "hidden" }
        : { display: "none" }

      return this.visible ? null : hiddenStyles
    },
  },
})
