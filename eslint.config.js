import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
   {
      ignores: ['dist/**', 'node_modules/**', 'jest.config.ts'],
   },
   js.configs.recommended,
   ...tseslint.configs.recommended,

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
         local: {
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
            },
         },
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

         'prefer-object-spread': 'error',
         'local/no-comments': 'error',
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
