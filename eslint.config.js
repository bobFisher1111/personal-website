import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      ".next/**",
      "**/*.min.js",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      "no-undef": "off",
      "react/react-in-jsx-scope": "off",

      "@typescript-eslint/no-explicit-any": "error",

      "no-restricted-syntax": [
        "error",
        {
          selector: "TSUnknownKeyword",
          message:
            "Do not use `unknown`. Prefer a specific type or `undefined`/`never` as appropriate.",
        },
        {
          selector: "TSAsExpression",
          message:
            "Do not use type assertions (`as`). Prefer proper typing (generics, overloads, or `satisfies`).",
        },
        {
          selector: "TSTypeAssertion",
          message:
            "Do not use type assertions (`<Type>value`). Prefer proper typing (generics, overloads, or `satisfies`).",
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
];
