const { loadData } = require('./parsers.js');

const formatValue = (v) => {
  if (typeof v === 'string') return v;
  return String(v);
};


function buildFlatDiffString(obj1, obj2) {
  const indent = '  ';

  // Собираем уникальные ключи и сортируем по алфавиту (иммутабельно)
  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)])).sort();

  const lines = keys.flatMap((key) => {
    const has1 = Object.prototype.hasOwnProperty.call(obj1, key);
    const has2 = Object.prototype.hasOwnProperty.call(obj2, key);

    if (has1 && has2) {
      const val1 = obj1[key];
      const val2 = obj2[key];

      if (val1 === val2) {
        // неизменённое поле
        return `${indent}  ${key}: ${formatValue(val1)}`;
      }
      // изменённое поле: сначала из первого файла, затем из второго
      return [
        `${indent}- ${key}: ${formatValue(val1)}`,
        `${indent}+ ${key}: ${formatValue(val2)}`,
      ];
    }

    if (has1) {
      // только в первом
      return `${indent}- ${key}: ${formatValue(obj1[key])}`;
    }

    // только во втором
    return `${indent}+ ${key}: ${formatValue(obj2[key])}`;
  });

  return `{\n${lines.join('\n')}\n}`;
}


function genDiff(filepath1, filepath2 /* , format = 'stylish' */) {
  const data1 = loadData(filepath1);
  const data2 = loadData(filepath2);
  return buildFlatDiffString(data1, data2);
}

module.exports = genDiff;
