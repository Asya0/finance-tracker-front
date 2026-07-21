import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'react/no-array-index-key': 'error', // не использовать индекс в качестве key

      'react/jsx-boolean-value': ['error', 'never'],

      'react/hook-use-state': 'error', // проверка правильности написания имен

      'no-param-reassign': 'error', // запрет на изменение параметров функции

      'prefer-template': 'error', // шаблонные строки

      'max-lines': [
        'warn',
        {
          max: 400,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      'max-params': ['error', 2], // не больше двух параметров

      '@typescript-eslint/prefer-nullish-coalescing': 'error', // вместо || использовать ??

      'import/no-default-export': 'error', // чтобы писать вместо export default Button -> import { Button } from './Button';

      'func-style': ['error', 'expression'], // предпочитать стрелочные функции

      'prefer-object-spread': 'error', // предпочитать оператор spread вместо Object.assign
    },
  },

  prettier,
];
