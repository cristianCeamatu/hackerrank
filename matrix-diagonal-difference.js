function diagonalDifference(arr) {
  // Write your code here
  let ltoRSum = 0
  let rtoLSum = 0
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][i])
    console.log(arr[i][arr.length - 1 - i])
    ltoRSum += arr[i][i]
    rtoLSum += arr[i][arr.length - 1 - i]
  }
  console.log(ltoRSum)
  console.log(rtoLSum)
  console.log(Math.abs(ltoRSum - rtoLSum))
  return Math.abs(ltoRSum - rtoLSum)
}

diagonalDifference([[1, 2, 3],[4, 5, 6],[9, 8, 9]])
