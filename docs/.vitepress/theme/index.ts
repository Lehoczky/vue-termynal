import "./index.css"

import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"

import VueTermynalPlugin from "../../../src"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueTermynalPlugin as any)
  },
} satisfies Partial<Theme>
