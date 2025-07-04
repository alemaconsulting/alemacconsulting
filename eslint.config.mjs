import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier' // Добавляем prettier конфиг
  ),
  {
    rules: {
      // Форматирование и стиль
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'only-multiline'],
      quotes: ['warn', 'single', { allowTemplateLiterals: true }],
      semi: ['error', 'always'],

      // React правила
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/no-unused-state': 'warn',
      'react/self-closing-comp': 'warn',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript правила
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Общие правила
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'off', // Отключаем базовое правило в пользу TS версии
      'prefer-const': 'warn',
      'no-var': 'error',
      eqeqeq: 'warn',

      // Убираем специфичные правила плагинов, которые могут не работать
      // без явного подключения плагинов в flat config
    },
  },
];

export default eslintConfig;
