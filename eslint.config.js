import js from '@eslint/js';
import css from '@eslint/css';
import jsonc from 'eslint-plugin-jsonc';
import * as jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

const localPlugin = {
   rules: {
      'no-comments': {
         meta: {
            type: 'suggestion',
            messages: {
               noComments: 'Комментарии запрещены',
            },
         },
         create(context) {
            return {
               'Program:exit'() {
                  for (const comment of context.sourceCode.getAllComments()) {
                     context.report({
                        loc: comment.loc,
                        messageId: 'noComments',
                     });
                  }
               },
            };
         },
      },
      'no-comments-css': {
         meta: {
            type: 'suggestion',
            messages: {
               noComments: 'Комментарии в стилях запрещены',
            },
         },
         create(context) {
            for (const comment of context.sourceCode.comments ?? []) {
               context.report({
                  loc: comment.loc,
                  messageId: 'noComments',
               });
            }
            return {};
         },
      },
   },
};

export default [
   {
      ignores: ['dist/**', 'node_modules/**', 'jest.config.ts'],
   },

   {
      ...js.configs.recommended,
      files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
   },
   ...tseslint.configs.recommended.map((config) => ({
      ...config,
      files: ['**/*.{ts,tsx}'],
   })),

   {
      plugins: {
         local: localPlugin,
      },

      rules: {
         'local/no-comments': 'error',
      },
   },

   {
      files: ['**/*.{ts,tsx}'],

      languageOptions: {
         parserOptions: {
            projectService: true,
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
         'react/no-array-index-key': 'error',

         'react/jsx-boolean-value': ['error', 'never'],

         'react/hook-use-state': 'error',

         'no-param-reassign': 'error',

         'prefer-template': 'error',

         'max-lines': [
            'warn',
            {
               max: 400,
               skipBlankLines: true,
               skipComments: true,
            },
         ],

         'max-params': ['error', 2],

         '@typescript-eslint/prefer-nullish-coalescing': 'error',

         'import/no-default-export': 'error',

         'func-style': ['error', 'expression'],
      },
   },

   {
      files: ['**/*.css'],
      plugins: {
         css,
         local: localPlugin,
      },
      language: 'css/css',
      rules: {
         'local/no-comments-css': 'error',
         'local/no-comments': 'off',
      },
   },

   {
      files: ['**/*.json'],
      plugins: {
         jsonc,
      },
      languageOptions: {
         parser: jsoncParser,
      },
      rules: {
         'jsonc/no-comments': 'error',
         'local/no-comments': 'off',
      },
   },

   {
      files: ['**/*.config.{ts,js,mjs}'],
      rules: {
         'import/no-default-export': 'off',
      },
   },

   prettier,
];
