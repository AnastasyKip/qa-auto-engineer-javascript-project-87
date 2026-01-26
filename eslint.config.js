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
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
    },
  },
]
