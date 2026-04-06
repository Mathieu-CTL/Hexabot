module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'header'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'unknown',
          'parent',
          'sibling',
          'index',
          'internal',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'header/header': [
      2,
      'block',
      [
        '',
        {
          pattern: '^ \\* Copyright © 20\\d{2} Hexastack. All rights reserved.$',
          template: ' * Copyright © 2025 Hexastack. All rights reserved.',
        },
        ' *',
        ' * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:',
        ' * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.',
        ' * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software\'s "About" section, documentation, and README file).',
        ' ',
      ],
      2,
    ],
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'object-shorthand': 'error',
  },
};