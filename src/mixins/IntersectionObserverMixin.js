import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      observer: null,
    }
  },
  methods: {
    observe(callback, options) {
      this.observer = new IntersectionObserver(callback, options)
      this.observer.observe(this.$el)
    },
    unobserve() {
      this.observer.unobserve(this.$el)
      this.observer = null
    },
  },
  beforeDestory() {
    if (this.observer) {
      this.unobserve()
    }
  },
})
