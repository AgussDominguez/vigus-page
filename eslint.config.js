import eslintPluginNext from '@next/eslint-plugin-next';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules', '.next', 'dist'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@next/next': eslintPluginNext,
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintPluginNext.configs['core-web-vitals'].rules,
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
];
