const fs = require('fs');
const path = require('path');
const genDiff = require('../src/index.js');

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('gendiff stylish (flat)', () => {
  test('json files', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const expected = readFile('expected_flat_stylish.txt');
    expect(genDiff(filepath1, filepath2)).toBe(expected);
  });

  test('yaml files', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    const expected = readFile('expected_flat_stylish.txt');
    expect(genDiff(filepath1, filepath2)).toBe(expected);
  });
});

describe('gendiff plain (flat)', () => {
  test('json files', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const expected = readFile('expected_plain.txt');
    expect(genDiff(filepath1, filepath2, 'plain')).toBe(expected);
  });

  test('yaml files', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    const expected = readFile('expected_plain.txt');
    expect(genDiff(filepath1, filepath2, 'plain')).toBe(expected);
  });
});

describe('gendiff json (flat)', () => {
  test('json files', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const result = genDiff(filepath1, filepath2, 'json');
    const parsed = JSON.parse(result);

    expect(Array.isArray(parsed)).toBe(true); // результат — массив
    expect(parsed.some((item) => item.key === 'timeout')).toBe(true); // пример проверки
  });

  test('yaml files', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    const result = genDiff(filepath1, filepath2, 'json');
    const parsed = JSON.parse(result);

    expect(parsed.some((item) => item.type === 'added' || item.type === 'removed')).toBe(true);
  });
});

