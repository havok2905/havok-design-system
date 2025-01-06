import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [
      '**/*.{js,mjs,cjs,ts,jsx,tsx}'
    ]
  },
  {
    ignores: [
      'babel.config.js',
      '__mocks__/styleMock.js'
    ]
  },
  {
    rules: {
      semi: 'error'
    }
  },
  {
    plugins: {
      '@stylistic': stylistic
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
];