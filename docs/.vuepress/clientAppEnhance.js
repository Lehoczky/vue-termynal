import { defineClientAppEnhance } from "@vuepress/client"
import VueTermynalPlugin from "../../src"

export default defineClientAppEnhance(({ app }) => {
  app.use(VueTermynalPlugin)
})
