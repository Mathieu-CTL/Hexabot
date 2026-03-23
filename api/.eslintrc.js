module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: [
    "../.eslintrc.base.js",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended-legacy",
  ],
  plugins: ["security"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", "add-extra-deps.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/lines-between-class-members": [
      1,
      {
        enforce: [
          { blankLine: "always", prev: "*", next: "field" },
          { blankLine: "always", prev: "field", next: "*" },
          { blankLine: "always", prev: "method", next: "method" },
        ],
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/padding-line-between-statements": [
      2,
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "*", next: "function" },
    ],
    "lines-between-class-members": "off",
  },
};