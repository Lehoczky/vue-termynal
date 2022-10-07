import typescript from "@rollup/plugin-typescript"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), typescript({ tsconfig: "./tsconfig.json" })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "vue-termynal",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        sourcemap: true,
      },
    },
  },
})
