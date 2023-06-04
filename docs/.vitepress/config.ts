import { defineConfig } from "vitepress"

import { version } from "../../package.json"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vue-termynal/",
  title: "Vue-Termynal",
  description: "Documentation site for the Vue-Termynal library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: version,
        items: [
          {
            text: "Changelog",
            link: "https://github.com/Lehoczky/vue-termynal/blob/master/CHANGELOG.md",
          },
        ],
      },
    ],

    sidebar: [
      { text: "Getting Started", link: "/" },
      { text: "Components", link: "/components" },
      { text: "Styling", link: "/styling" },
      { text: "VuePress Integration", link: "/vuepress-integration" },
      { text: "Examples", link: "/examples" },
      { text: "Contributing", link: "/contributing" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Lehoczky/vue-termynal" },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/Lehoczky/vue-termynal/edit/master/docs/:path",
    },
  },
})
