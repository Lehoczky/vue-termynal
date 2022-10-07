// @ts-check
const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  parser: "vue-eslint-parser",
  plugins: ["only-warn", "@typescript-eslint", "simple-import-sort"],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-unsafe-optional-chaining": "warn",

    "default-case-last": "warn",
    "default-param-last": "warn",
    eqeqeq: "warn",
    "no-else-return": "warn",
    "no-implicit-coercion": "warn",
    "no-param-reassign": "warn",
    "no-return-assign": "warn",
    "no-useless-return": "warn",
    yoda: "warn",

    "no-negated-condition": "warn",

    "no-var": "warn",
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-template": "warn",

    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",

    "simple-import-sort/imports": "warn",

    "vue/custom-event-name-casing": ["warn", "kebab-case"],
    "vue/html-self-closing": ["warn", { html: { void: "always" } }],
    "vue/no-useless-v-bind": "warn",
    "vue/eqeqeq": "warn",
    "vue/script-setup-uses-vars": "warn",
  },
  overrides: [
    {
      files: ["*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
})
