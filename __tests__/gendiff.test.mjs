import fs from 'fs'
import path from 'path'
import { describe, test, expect } from 'vitest'
import genDiff from '../src/index.js'

const getFixturePath = filename =>
  path.join(process.cwd(), '__fixtures__', filename)

const readFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

describe('gendiff stylish (flat)', () => {
  test('json files', () => {
    const filepath1 = getFixturePath('file1.json')
    const filepath2 = getFixturePath('file2.json')
    const expected = readFile('expected_flat_stylish.txt')
    expect(genDiff(filepath1, filepath2)).toBe(expected)
  })

  test('yaml files', () => {
    const filepath1 = getFixturePath('file1.yml')
    const filepath2 = getFixturePath('file2.yml')
    const expected = readFile('expected_flat_stylish.txt')
    expect(genDiff(filepath1, filepath2)).toBe(expected)
  })
})

describe('gendiff plain (flat)', () => {
  test('json files', () => {
    const filepath1 = getFixturePath('file1.json')
    const filepath2 = getFixturePath('file2.json')
    const expected = readFile('expected_plain.txt').trim()
    expect(genDiff(filepath1, filepath2, 'plain').trim()).toBe(expected)
  })

  test('yaml files', () => {
    const filepath1 = getFixturePath('file1.yml')
    const filepath2 = getFixturePath('file2.yml')
    const expected = readFile('expected_plain.txt').trim()
    expect(genDiff(filepath1, filepath2, 'plain').trim()).toBe(expected)
  })
})
