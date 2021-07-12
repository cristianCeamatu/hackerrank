function elementeReordonate(vector, m) {
  function sumArr(arr) {
    let res = []
    let curRes = 0
    for (let i = arr.length - 1; i >= 0; i--) {
      curRes = curRes + arr[i] / (i + 1)
      res.push(curRes)
    }
    return res.reduce((a, b) => a + b)
  }

  function getArrayMutations(arr, perms = [], len = arr.length) {
    if (len === 1) perms.push(arr.slice(0))

    for (let i = 0; i < len; i++) {
      getArrayMutations(arr, perms, len - 1)

      len % 2 // parity dependent adjacent elements swap
        ? ([arr[0], arr[len - 1]] = [arr[len - 1], arr[0]])
        : ([arr[i], arr[len - 1]] = [arr[len - 1], arr[i]])
    }

    return perms
  }
  // Write your code here
  const permutations = getArrayMutations(vector)
  return permutations.some((perm) => {
    const sum = sumArr(perm)
    return sum === m
  })
    ? 'DA'
    : 'NU'
}

console.log(elementeReordonate([2, 5, 1], 8))
console.log(elementeReordonate([0, 1, 2, 3], 4))
