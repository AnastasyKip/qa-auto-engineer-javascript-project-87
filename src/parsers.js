const fs = require('fs');
const path = require('path');

/**
 * Возвращает абсолютный путь для файла.
 */
const getAbsolutePath = (filepath) => (
  path.isAbsolute(filepath) ? filepath : path.resolve(process.cwd(), filepath)
);

/**
 * Определяет тип данных по расширению файла.
 */
const getFormatByExt = (filepath) => {
  const ext = path.extname(filepath).toLowerCase().replace('.', '');
  return ext; // 'json', позже добавим 'yml' / 'yaml'
};

/**
 * Синхронно читает файл как текст.
 */
const readFile = (absolutePath) => fs.readFileSync(absolutePath, 'utf-8');

/**
 * Парсит строку в зависимости от формата.
 */
const parse = (content, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(content);
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};

/**
 * Комплексная функция: по пути читает и парсит данные.
 */
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
