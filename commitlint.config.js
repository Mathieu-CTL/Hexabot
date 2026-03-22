module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "refactor",
        "test",
        "security",
        "revert",
      ],
    ],
    "scope-enum": [
      1,
      "always",
      [
        "api",
        "frontend",
        "widget",
        "docker",
        "ci",
        "deps",
        "github",
        "release",
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "body-max-line-length": [1, "always", 100],
  },
};
