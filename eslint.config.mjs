export default [
  // игнор всего лишнего
  {
    ignores: ['node_modules/**', 'coverage/**'],
  },
  // базовая конфигурация для проекта
  {
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
    },
    rules: {
      // если хочешь — можно добавить свои правила
    },
  },
]