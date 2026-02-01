import fs from 'fs'
import path from 'path'
import { describe, test, expect } from 'vitest'
import genDiff from '../src/index.js'

const getFixturePath = filename =>
  path.join(process.cwd(), '__fixtures__', filename)

const readFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

const expectedStylish = readFile('expected_flat_stylish.txt').trim()
const expectedPlain = readFile('expected_plain.txt').trim()
const expectedJson = readFile('expected_flat_json.txt').trim()

const formats = ['json', 'yaml', 'yml']

describe('gendiff', () => {
  test.each(formats)('%s format', (format) => {
    const filepath1 = getFixturePath(`file1.${format}`)
    const filepath2 = getFixturePath(`file2.${format}`)

    expect(genDiff(filepath1, filepath2)).toBe(expectedStylish)
    expect(genDiff(filepath1, filepath2, 'stylish')).toBe(expectedStylish)
    expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlain)
    expect(genDiff(filepath1, filepath2, 'json')).toBe(expectedJson)
  })
})
