function oualeDeAur(cos) {
  // Write your code here
  let sum = Math.floor(cos.reduce((a, b) => a + b))
  if (sum % 2 !== 0) {
    return 'Ouale de aur lipsesc'
  }
  sum = Math.floor(sum / 2)

  const s = new Set()

  for (let i = 0; i < cos.length; i++) {
    const val = sum - cos[i]

    if (!s.has(cos[i])) {
      s.add(cos[i])
    }

    if (s.has(val)) {
      return `Ouale de aur au valorile ${val} si ${cos[i]}`
    }
    s.add(cos[i])
  }
  return 'Ouale de aur lipsesc'
}

console.log(oualeDeAur([2, 11, 5, 1, 4, 7]))
