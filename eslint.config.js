import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      indent: ["error", 4],
      quotes: ["error", "double-quotes"],
      semi: ["error", "always"],
    },
  },
];
