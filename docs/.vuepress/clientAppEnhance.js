import { defineClientAppEnhance } from "@vuepress/client"
import { VTermynal, VtInput, VtProgress, VtSpinner, VtText } from "../../src"

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("VTermynal", VTermynal)
  app.component("VtInput", VtInput)
  app.component("VtProgress", VtProgress)
  app.component("VtSpinner", VtSpinner)
  app.component("VtText", VtText)
})
