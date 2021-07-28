function elementeReordonate(vector, m) {
  return vector.reduce((a, b) => a + b) === m ? 'DA' : 'NU'
}

console.log(elementeReordonate([2, 5, 1], 8))
console.log(elementeReordonate([0, 1, 2, 3], 4))
