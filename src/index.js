cat > src/index.js << 'EOF'
// Позже здесь будет реальная логика сравнения.
// Сейчас — заглушка, чтобы пакет экспортировал default-функцию.
function genDiff(filepath1, filepath2) {
  return 'diff result';
}

module.exports = genDiff; // default export для commonjs
EOF
