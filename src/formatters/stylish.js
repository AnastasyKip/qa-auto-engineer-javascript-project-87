const formatValue = v => (typeof v === 'string' ? v : String(v))

const stylish = (nodes) => {
  const indent = '  '
  const lines = nodes.flatMap((node) => {
    const { key, type } = node

    switch (type) {
      case 'unchanged':
        return `${indent}  ${key}: ${formatValue(node.value)}`
      case 'removed':
        return `${indent}- ${key}: ${formatValue(node.value)}`
      case 'added':
        return `${indent}+ ${key}: ${formatValue(node.value)}`
      case 'changed':
        return [
          `${indent}- ${key}: ${formatValue(node.oldValue)}`,
          `${indent}+ ${key}: ${formatValue(node.newValue)}`,
        ]
      default:
        throw new Error(`Unknown node type: ${type}`)
    }
  })

  return `{\n${lines.join('\n')}\n}`
}

module.exports = stylish