import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'] },
  js.configs.recommended,

  // Node code: server, root scripts, and tool configs (vite/tailwind/postcss)
  {
    files: ['server/**/*.js', '*.js', 'client/*.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: globals.node },
  },

  // Browser code: React app
  {
    files: ['client/src/**/*.{js,jsx}'],
    ...react.configs.flat.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { react, 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules, // React 17+ needs no `import React`
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off', // plain JS project; revisit if we add TypeScript
    },
  },

  // Must be last: turns off stylistic rules that clash with Prettier
  prettier,
];
