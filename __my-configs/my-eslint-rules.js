/** @type {import("eslint").Linter.RulesRecord} */

// ========================================
// ФОРМАТИРОВАНИЕ И СТИЛЬ КОДА
// ========================================

const formattingRules = {
  // Пробелы в объектах
  "object-curly-spacing": ["error", "always"],

  // Запятые в конце строк
  "comma-dangle": ["error", "only-multiline"],

  // Кавычки
  quotes: ["warn", "single", { allowTemplateLiterals: true }],

  // Точки с запятой
  semi: ["error", "always"],

  // Пустые строки между методами класса
  "lines-between-class-members": [
    "error",
    {
      enforce: [
        { blankLine: "always", next: "method", prev: "*" },
        { blankLine: "always", next: "*", prev: "method" },
      ],
    },
  ],

  // Отключенные правила форматирования для гибкости
  "implicit-arrow-linebreak": "off",
  "function-paren-newline": "off",
  "operator-linebreak": "off",
  "object-curly-newline": "off",
};

// ========================================
// TYPESCRIPT ПРАВИЛА
// ========================================

const typescriptRules = {
  // Запрет type assertions
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    { assertionStyle: "never" },
  ],

  // Явный тип возвращаемого значения функций
  "@typescript-eslint/explicit-function-return-type": "off",

  // Явные модификаторы доступа
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    { accessibility: "explicit", overrides: { constructors: "off" } },
  ],

  // Типы для экспортируемых функций
  "@typescript-eslint/explicit-module-boundary-types": "off",

  // Стиль сигнатуры методов
  "@typescript-eslint/method-signature-style": "error",

  // Запрет any
  "@typescript-eslint/no-explicit-any": "warn",

  // Пустые функции
  "@typescript-eslint/no-empty-function": "off",

  // Floating promises
  "@typescript-eslint/no-floating-promises": "off",

  // Очевидные типы
  "@typescript-eslint/no-inferrable-types": "error",

  // Магические числа
  "@typescript-eslint/no-magic-numbers": [
    "warn",
    {
      ignore: [0, 1, -1, 2],
      ignoreArrayIndexes: true,
      ignoreClassFieldInitialValues: true,
      ignoreReadonlyClassProperties: true,
      enforceConst: true,
      ignoreDefaultValues: true,
    },
  ],

  // Не нужные параметры типа
  "@typescript-eslint/no-unnecessary-type-parameters": "off",

  // Неиспользуемые переменные
  "@typescript-eslint/no-unused-vars": [
    // ДУБЛИКАТ
    "error", // более строгая версия
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

  // Non-null assertion
  "@typescript-eslint/no-non-null-assertion": "warn",

  // Использование до определения
  "@typescript-eslint/no-use-before-define": "off",

  // Пустые экспорты
  "@typescript-eslint/no-useless-empty-export": "error",

  // var requires
  "@typescript-eslint/no-var-requires": "off",

  // Сравнение для array.sort()
  "@typescript-eslint/require-array-sort-compare": "error",

  // Template expressions
  "@typescript-eslint/restrict-template-expressions": "off",

  // Unbound методы
  "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],

  // Устаревшие правила
  "@typescript-eslint/interface-name-prefix": "off",
  "@typescript-eslint/ban-ts-ignore": "off",
  "@typescript-eslint/ban-ts-comment": "warn",
};

// ========================================
// REACT ПРАВИЛА
// ========================================

const reactRules = {
  // PropTypes - отключено для TypeScript
  "react/prop-types": "off",

  // DisplayName для компонентов
  "react/display-name": "off",

  // React 17+ не требует импорт React
  "react/jsx-uses-react": "off",
  "react/react-in-jsx-scope": "off",

  // Key пропы
  "react/jsx-key": "warn",

  // Дубликаты пропов
  "react/jsx-no-duplicate-props": "error",

  // Неопределенные переменные в JSX
  "react/jsx-no-undef": "error",

  // Неиспользуемое состояние
  "react/no-unused-state": "warn",

  // Индекс как key (разрешено)
  "react/no-array-index-key": "off",

  // Самозакрывающиеся теги
  "react/self-closing-comp": "warn",

  // Короткий синтаксис для boolean пропов
  "react/jsx-boolean-value": ["error", "never"],
};

// ========================================
// REACT HOOKS ПРАВИЛА
// ========================================

const reactHooksRules = {
  // Правила хуков
  "react-hooks/rules-of-hooks": "error",

  // Зависимости в useEffect
  "react-hooks/exhaustive-deps": "warn",
};

// ========================================
// IMPORT/EXPORT ПРАВИЛА
// ========================================

const importRules = {
  // Сортировка импортов
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

  // Неиспользуемые импорты
  "unused-imports/no-unused-imports": "error",

  // Запрет относительных путей
  "no-relative-import-paths/no-relative-import-paths": [
    "error",
    { allowSameFolder: false, rootDir: "src", prefix: "@" },
  ],

  // Импорты в начале файла
  "import/first": "error",

  // Пустая строка после импортов
  "import/newline-after-import": "error",

  // Циклические импорты
  "import/no-cycle": "error",

  // Расширения файлов
  "import/extensions": [
    "error",
    "ignorePackages",
    { js: "never", jsx: "never", ts: "never", tsx: "never" },
  ],

  // Default экспорт не обязателен
  "import/prefer-default-export": "off",

  // Отключено - TypeScript сам проверяет
  "import/no-unresolved": "off",

  // Отключено из-за проблем с TypeScript resolver
  "import/no-duplicates": "off",
};

// ========================================
// UNICORN ПРАВИЛА
// ========================================

const unicornRules = {
  // Разрешить null
  "unicorn/no-null": "off",

  // Отключить предпочтение globalThis
  "unicorn/prefer-global-this": "off",

  // Отключить предпочтение querySelector
  "unicorn/prefer-query-selector": "off",
  "unicorn/text-encoding-identifier-case": "off",

  // Контроль аббревиатур
  "unicorn/prevent-abbreviations": [
    "error",
    { allowList: { props: true, Props: true } },
  ],

  // Явная проверка длины
  "unicorn/explicit-length-check": "off",

  // Именование файлов
  "unicorn/filename-case": [
    "error",
    {
      cases: {
        kebabCase: true,
        camelCase: false,
        pascalCase: false,
      },
    },
  ],
};

// ========================================
// ОБЩИЕ ПРАВИЛА КАЧЕСТВА КОДА
// ========================================

const generalRules = {
  // Консоль и отладка
  "no-console": "warn",
  "no-debugger": "warn",

  // Переменные
  "no-unused-vars": "off", // используем TypeScript версию
  "prefer-const": "warn",
  "no-var": "error",

  // Функции
  "no-empty-function": "error",
  "max-lines-per-function": [
    "warn",
    { max: 60, skipBlankLines: true, skipComments: true },
  ],

  // Сравнения
  eqeqeq: "warn",

  // Фигурные скобки обязательны
  curly: ["error", "all"],

  // Отключено для React компонентов
  "class-methods-use-this": "off",

  // Отключено для TypeScript
  "dot-notation": "off",
};

// ========================================
// ОСНОВНАЯ КОНФИГУРАЦИЯ
// ========================================

export const myEslintRules = {
  ...formattingRules,
  ...typescriptRules,
  ...reactRules,
  ...reactHooksRules,
  ...importRules,
  // ...unicornRules,
  ...generalRules,
};
