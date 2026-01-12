import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    /* 1. Игнорируемые файлы (комбинация ваших и наставника) */
    ignores: [
      'dist',
      'build',
      'node_modules',
      'coverage',
      '*.log',
      '.vscode',
      '.idea',
      '.DS_Store',
    ],
  },

  /* 2. Базовые конфиги */
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    /* 3. Настройки для React и TS */
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    /* Автоопределение версии React (из конфига наставника) */
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      /* Правила от наставника (качество кода) */
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off', // Не нужно в современном React
      'react/prop-types': 'off', // Используем TS вместо prop-types
      'no-console': 'warn', // Не забываем console.log в коде
      eqeqeq: 'warn', // Только строгое сравнение ===
      curly: 'warn', // Обязательные {} для блоков if/for

      /* Правила Vite (из вашего конфига) */
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      /* Настройки TS */
      '@typescript-eslint/no-unused-vars': 'warn',

      /* Форматирование запятых (как просил наставник) */
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
    },
  },

  /* 4. Prettier всегда последний — он выключает конфликтующие правила стиля */
  eslintConfigPrettier,
);
