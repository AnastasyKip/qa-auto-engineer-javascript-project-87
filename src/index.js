import { loadData } from './parsers.js'
import buildDiff from './diff.js'
import format from './formatters/index.js'

export default function genDiff(filepath1, filepath2, outFormat = 'stylish') {
  const data1 = loadData(filepath1)
  const data2 = loadData(filepath2)
  const diff = buildDiff(data1, data2)
  return format(diff, outFormat)
}
