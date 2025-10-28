const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Абсолютный путь
const getAbsolutePath = (filepath) => (
  path.isAbsolute(filepath) ? filepath : path.resolve(process.cwd(), filepath)
);

// Определяем формат по расширению
const getFormatByExt = (filepath) => path.extname(filepath).toLowerCase().replace('.', '');

// Читаем файл синхронно
const readFile = (absolutePath) => fs.readFileSync(absolutePath, 'utf-8');

// Парсим содержимое по формату
const parse = (content, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
    case 'yaml':
      return yaml.load(content);
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};

// Комплексная: прочитать и распарсить
const loadData = (filepath) => {
  const absolutePath = getAbsolutePath(filepath);
  const format = getFormatByExt(absolutePath);
  const content = readFile(absolutePath);
  return parse(content, format);
};

module.exports = {
  getAbsolutePath,
  getFormatByExt,
  readFile,
  parse,
  loadData,
};
