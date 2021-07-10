function divisibleSumPairs(n, k, ar) {
    //   i < j and ar[i] + ar[j] % k === 0
  let count = 0
  
  for (let i = 0; i < n - 1; i++) {
    const cur = ar[i]
    for (let j = i + 1; j < n; j++) {
      const nextEl = ar[j]
      if (i < j && (cur + nextEl) % k === 0) count++
    }
  }

  return count
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]))
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))