import { defineClientConfig } from "@vuepress/client"
import VueTermynalPlugin from "../../src"

export default defineClientConfig({
  enhance({ app }) {
    app.use(VueTermynalPlugin)
  },
})
