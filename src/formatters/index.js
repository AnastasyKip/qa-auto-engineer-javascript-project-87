const stylish = require('./stylish.js');
const plain = require('./plain.js');

const format = (nodes, name = 'stylish') => {
  switch (name) {
    case 'stylish':
      return stylish(nodes);
    case 'plain':
      return plain(nodes);
    default:
      throw new Error(`Unknown format: ${name}`);
  }
};

module.exports = format;
