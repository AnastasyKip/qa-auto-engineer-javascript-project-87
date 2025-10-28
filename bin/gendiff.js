#!/usr/bin/env node

const { Command } = require("commander");
const pkg = require("../package.json");

const program = new Command();

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version(pkg.version, "-V, --version", "output the version number")
  .arguments("<filepath1> <filepath2>")
  .option("-f, --format <type>", "output format")
  .helpOption("-h, --help", "output usage information");

program.parse(process.argv);
