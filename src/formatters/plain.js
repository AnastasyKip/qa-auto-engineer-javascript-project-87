const formatScalar = (value) => {
  const type = typeof value;
  if (value === null) return 'null';
  if (type === 'string') return `'${value}'`;
  if (type === 'object') return '[complex value]'; // на будущее для вложенных структур
  return String(value); // number, boolean
};

const plain = (nodes) => {
  const lines = nodes.flatMap((node) => {
    const { key, type } = node;

    switch (type) {
      case 'removed':
        return `Property '${key}' was removed`;
      case 'added':
        return `Property '${key}' was added with value: ${formatScalar(node.value)}`;
      case 'updated':
        return `Property '${key}' was updated. From ${formatScalar(node.oldValue)} to ${formatScalar(node.newValue)}`;
      case 'unchanged':
        return []; // не выводим ничего
      default:
        throw new Error(`Unknown node type for plain: ${type}`);
    }
  });

  return lines.join('\n');
};

module.exports = plain;
