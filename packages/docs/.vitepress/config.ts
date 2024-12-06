import packageJson from "@lehoczky/vue-termynal/package.json" with { type: "json" }
import { defineConfig } from "vitepress"
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vue-termynal/",
  title: "Vue-Termynal",
  description: "Documentation site for the Vue-Termynal library",
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: packageJson.version,
        items: [
          {
            text: "Changelog",
            link: "https://github.com/Lehoczky/vue-termynal/blob/master/packages/vue-termynal/CHANGELOG.md",
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
        "https://github.com/Lehoczky/vue-termynal/edit/master/packages/docs/:path",
    },
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
})
