const stylish = require('./stylish.js');

const format = (nodes, name = 'stylish') => {
  if (name === 'stylish') return stylish(nodes);
  throw new Error(`Unknown format: ${name}`);
};

module.exports = format;
