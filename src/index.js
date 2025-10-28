const { loadData } = require('./parsers.js');
const buildDiff = require('./diff.js');
const format = require('./formatters/index.js');

function genDiff(filepath1, filepath2, outFormat = 'stylish') {
  const data1 = loadData(filepath1);
  const data2 = loadData(filepath2);
  const diff = buildDiff(data1, data2);
  return format(diff, outFormat); // форматер по умолчанию — stylish
}

module.exports = genDiff;
