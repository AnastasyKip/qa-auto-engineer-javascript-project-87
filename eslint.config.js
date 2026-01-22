import globals from 'globals'
import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  eslint.configs.recommended,
  {
  plugins: {
    '@stylistic': stylistic,
  },
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    globals: {
      ...globals.node,
      ...globals.vitest,
    },
  },
  rules: {
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/eol-last': ['error', 'always'],
  },
},
]
