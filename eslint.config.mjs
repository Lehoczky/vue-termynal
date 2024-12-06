// @ts-check
import { configLehoczkyVue } from "@lehoczky/eslint-config-vue"

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...configLehoczkyVue(),
  {
    files: ["packages/playground/**"],
    rules: { "no-console": "off" },
  },
]
