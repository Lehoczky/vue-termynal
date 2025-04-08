import { resolve } from "node:path"

import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"
import dts from "vite-plugin-dts"

import packageJson from "./package.json" with { type: "json" }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "vue-termynal",
      formats: ["es"],
    },
    sourcemap: true,
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies),
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
