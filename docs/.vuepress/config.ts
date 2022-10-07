import { defaultTheme, defineUserConfig } from "vuepress"

export default defineUserConfig({
  base: "/vue-termynal/",
  lang: "en-US",
  title: "Vue-Termynal",
  description: "Documentation site for the Vue-Termynal library",
  theme: defaultTheme({
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
  }),
})
