import typescriptEslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import next from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

// ========================================
// 1. КОНСТАНТЫ С ПРАВИЛАМИ
// ========================================

const customRules = {
  // --- A. ФОРМАТИРОВАНИЕ И СТИЛЬ ---
  "object-curly-spacing": ["error", "always"],
  "comma-dangle": ["error", "only-multiline"],
  quotes: ["warn", "double", { allowTemplateLiterals: true }],
  semi: ["error", "always"],
  "lines-between-class-members": [
    "error",
    {
      enforce: [
        { blankLine: "always", next: "method", prev: "*" },
        { blankLine: "always", next: "*", prev: "method" },
      ],
    },
  ],
  "implicit-arrow-linebreak": "off",
  "function-paren-newline": "off",
  "operator-linebreak": "off",
  "object-curly-newline": "off",

  // --- B. ОБЩИЕ ПРАВИЛА ---
  "no-console": "warn",
  "no-debugger": "warn",
  "prefer-const": "warn",
  "no-var": "error",
  "no-empty-function": "error",
  eqeqeq: "warn",
  curly: ["error", "all"],
};

const typescriptOverrides = {
  // Отключение базовых правил, конфликтующих с TS
  "no-unused-vars": "off",
  "no-empty-function": "off",
  "dot-notation": "off",

  // Ваши правила TypeScript
  "@typescript-eslint/consistent-type-assertions": [
    "off",
    { assertionStyle: "never" },
  ],
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/no-non-null-assertion": "warn",
  "@typescript-eslint/ban-ts-comment": "warn",
  "@typescript-eslint/no-use-before-define": "off",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      vars: "all",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],
};

const reactOverrides = {
  // Отключение базовых правил, конфликтующих с React
  "class-methods-use-this": "off",

  // Ваши правила React & React Hooks
  "react/prop-types": "off",
  "react/display-name": "off",
  "react/jsx-uses-react": "off", // React 17+
  "react/react-in-jsx-scope": "off", // React 17+
  "react/jsx-key": "warn",
  "react/jsx-no-duplicate-props": "error",
  "react/jsx-no-undef": "error",
  "react/no-unused-state": "warn",
  "react/no-array-index-key": "off",
  "react/self-closing-comp": "warn",
  "react/jsx-boolean-value": ["error", "never"],

  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
};

const importOverrides = {
  // --- C. ПРАВИЛА ИМПОРТА (Ваш приоритет) ---
  "import/order": [
    "error",
    {
      "newlines-between": "always-and-inside-groups",
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling"],
        "object",
        "type",
        "index",
      ],
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
  "unused-imports/no-unused-imports": "error",
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-cycle": "error",
  "import/no-unresolved": "off",
  "import/extensions": [
    "error",
    "ignorePackages",
    { js: "never", jsx: "never", ts: "never", tsx: "never" },
  ],
  "import/prefer-default-export": "off",
};

// Объединение всех пользовательских правил
const allRules = {
  ...customRules,
  ...typescriptOverrides,
  ...reactOverrides,
  ...importOverrides,
};

// ========================================
// 2. ОСНОВНАЯ КОНФИГУРАЦИЯ
// ========================================

export default [
  // 1. Глобальные игноры
  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "__content/**",
    ],
  },

  // 2. Конфигурация TypeScript, React, Next.js
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react: react,
      "react-hooks": reactHooks,
      "@next/next": next,
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        // Укажите путь к вашему tsconfig.json
        project: "./tsconfig.json",
      },
    },
    settings: {
      // Устраняет "Warning: React version not specified"
      react: {
        version: "detect",
      },
      // Настройка для правильной работы import/no-unresolved
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // Базовые рекомендации для Next.js и React (рекомендуется)
      ...next.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      // Ваши кастомные правила и переопределения
      ...allRules,
    },
  },
];
