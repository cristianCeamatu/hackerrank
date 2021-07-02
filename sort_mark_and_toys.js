function bubbleSort(a) {
    // Write your code here
  const n = a.length
  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
          const temp = a[j]
          a[j] = a[j + 1]
          a[j + 1] = temp
          count++
        }
    }
  }
  
  return a
}

function maximumToys(prices, k) {
    // Write your code here
  // console.log(`prices.sort((a, b) => a -b`, prices.sort((a, b) => a - b))
  console.log(`bubbleSort(prices)`, bubbleSort(prices))
  let count = 0
  let total = 0
  
  for (let price of prices) {
    if (total + price <= k) {
      total += price
      count++
    }
  }

  return count
}

console.log(maximumToys([1, 2, 3, 4], 7))
console.log(maximumToys([1, 12, 5, 111, 200 ,1000, 10], 50))