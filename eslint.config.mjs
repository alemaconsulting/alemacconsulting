import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {},
    rules: {
      'object-curly-spacing': ['error', 'always'], // Обеспечивает пробелы вокруг скобок
      'import/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'comma-dangle': ['error', 'only-multiline'],
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/no-unresolved': 'off',
    },
  },
];

export default eslintConfig;
