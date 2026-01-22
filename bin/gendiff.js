#!/usr/bin/env node

import { Command } from 'commander'
import genDiff from '../src/index.js'
import { readFileSync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pkg = JSON.parse(
  readFileSync(`${__dirname}/../package.json`, 'utf-8')
)

const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(pkg.version, '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2, options) => {
    try {
      const result = genDiff(filepath1, filepath2, options.format)
      console.log(result)
    } catch (e) {
      console.error(e.message)
      process.exit(1)
    }
  })

program.parse(process.argv)
