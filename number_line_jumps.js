function kangaroo(x1, v1, x2, v2) {
    // Write your code here
  // x1 (n * v1)
  // x2 (n * v2)
  for (let i = 1; i < Infinity; i++) {
    let posX1 = x1 + (i * v1)
    let posX2 = x2 + (i * v2)
    if (posX1 === posX2) return 'YES'
    if ((posX1 < posX2 && v1 <= v2) || (posX1 > posX2 && v1 >= v2)) return 'NO'
  }

  return (x1 - x2) % (v2 - v1) === 0 ? 'YES' : 'NO'
}

console.log(kangaroo(2, 1, 2, 1))
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))