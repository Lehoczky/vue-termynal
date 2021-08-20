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
  mounted() {
    this.$parent.lines.push(this)
  },
  methods: {
    hide() {
      this.visible = false
    },
  },
})
