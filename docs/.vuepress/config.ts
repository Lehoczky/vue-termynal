import { defineUserConfig } from "vuepress-vite"
import type { DefaultThemeOptions } from "vuepress-vite"

export default defineUserConfig<DefaultThemeOptions>({
  base: "/vue-termynal/",
  lang: "en-US",
  title: "Vue-Termynal",
  description: "Documentation site for the Vue-Termynal library",
  themeConfig: {
    repo: "https://github.com/Lehoczky/vue-termynal",
    repoLabel: "GitHub",
    sidebar: [
      "/",
      "components.md",
      "styling.md",
      "vuepress-integration.md",
      "examples.md",
      "contributing.md",
    ],
    contributors: false,
    lastUpdated: false,
    docsBranch: "master",
    docsDir: "docs",
  },
})
