import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigSvelte from "eslint-plugin-svelte";

export default [
  {
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  ...eslintPluginAstro.configs.all,
  ...eslintConfigSvelte.configs["flat/prettier"],
  eslintConfigPrettier,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      "react/react-in-jsx-scope": "off", // react can handle it
    },
  },
  {
    // disable react rules on astro files
    files: ["src/**/*.astro"],
    rules: {
      "react/no-unknown-property": "off",
    },
  },
];
