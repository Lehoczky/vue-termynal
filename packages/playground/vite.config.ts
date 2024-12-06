import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages()],
})
