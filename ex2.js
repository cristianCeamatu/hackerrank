function lideriiGirafelor(vectorInaltimi) {
  if (vectorInaltimi.length === 0) return vectorInaltimi
  // Write your code here
  const res = []
  let max = -1

  for (let i = vectorInaltimi.length - 1; i >= 0; i--) {
    if (i === vectorInaltimi.length - 1) {
      res.push(vectorInaltimi[i])
      max = vectorInaltimi[i]
    } else if (vectorInaltimi[i] > max) {
      res.unshift(vectorInaltimi[i])
      max = vectorInaltimi[i]
    }
  }

  return res
}

console.log(lideriiGirafelor([16.43, 17.01, 4.4, 3.75, 5.2, 2.5]))
console.log(lideriiGirafelor([1.2, 2.3, 3.1]))
