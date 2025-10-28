const { loadData } = require('./parsers');

/**
 * Базовая функция сравнения:
 * - принимает пути к двум файлам и формат вывода (опционально)
 * - загружает и парсит данные
 * - возвращает строку (пока заглушка)
 */
function genDiff(filepath1, filepath2, format = 'stylish') {
  const data1 = loadData(filepath1);
  const data2 = loadData(filepath2);

  // На следующем шаге здесь будет реальный дифф.
  // Сейчас вернём читаемую заглушку, чтобы видеть, что парсинг отработал.
  return `Parsed OK (${format}). Left keys: ${Object.keys(data1).length}, Right keys: ${Object.keys(data2).length}`;
}

module.exports = genDiff; // default export (CommonJS)
