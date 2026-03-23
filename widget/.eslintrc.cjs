module.exports = {
  root: true,
  extends: [
    "../.eslintrc.base.js",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/react-in-jsx-scope": "off",
    "import/newline-after-import": "error",
    "newline-after-var": "error",
    "newline-before-return": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "never", prev: ["const"], next: "const" },
    ],
    "react/jsx-curly-brace-presence": "warn",
    "react/self-closing-comp": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
