import "./index.css"
import "virtual:group-icons.css"

import VueTermynalPlugin from "@lehoczky/vue-termynal"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueTermynalPlugin)
  },
} satisfies Theme
