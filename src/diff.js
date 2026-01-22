const buildDiff = (obj1, obj2) => {
  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)]))
    .sort((a, b) => String(a).localeCompare(String(b)))

  return keys.map((key) => {
    const in1 = Object.prototype.hasOwnProperty.call(obj1, key)
    const in2 = Object.prototype.hasOwnProperty.call(obj2, key)

    if (in1 && in2) {
      const val1 = obj1[key]
      const val2 = obj2[key]
      if (val1 === val2) return { key, type: 'unchanged', value: val1 }
      return { key, type: 'changed', oldValue: val1, newValue: val2 }
    }

    if (in1) return { key, type: 'removed', value: obj1[key] }
    return { key, type: 'added', value: obj2[key] }
  })
}

export default buildDiff
