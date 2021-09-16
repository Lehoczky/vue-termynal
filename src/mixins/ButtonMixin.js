import { defineComponent } from "vue"

export default defineComponent({
  props: {
    visible: { type: Boolean, required: true },
  },
  computed: {
    style() {
      return this.visible ? null : { visibility: "hidden" }
    },
  },
})
