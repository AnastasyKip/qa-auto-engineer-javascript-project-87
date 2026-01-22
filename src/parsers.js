import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export const getAbsolutePath = (filepath) =>
  (path.isAbsolute(filepath) ? filepath : path.resolve(process.cwd(), filepath))

export const getFormatByExt = (filepath) =>
  path.extname(filepath).toLowerCase().replace('.', '')

export const readFile = (absolutePath) => fs.readFileSync(absolutePath, 'utf-8')

export const parse = (content, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(content)
    case 'yml':
    case 'yaml':
      return yaml.load(content)
    default:
      throw new Error(`Unsupported format: ${format}`)
  }
}

export const loadData = (filepath) => {
  const absolutePath = getAbsolutePath(filepath)
  const format = getFormatByExt(absolutePath)
  const content = readFile(absolutePath)
  return parse(content, format)
}
