import { defineClientAppEnhance } from "@vuepress/client"
import { VTermynal, VtInput, VtProgress, VtText } from "../../src"

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("VTermynal", VTermynal)
  app.component("VtInput", VtInput)
  app.component("VtProgress", VtProgress)
  app.component("VtText", VtText)
})
