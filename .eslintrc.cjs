// @ts-check
const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  root: true,
  extends: ["@lehoczky/eslint-config-vue"],
  overrides: [
    {
      files: ["playground/**"],
      rules: {
        "no-console": "off",
      },
    },
  ],
})
