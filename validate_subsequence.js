function isValidSubsequence(array, sequence) {
  // // Write your code here.
  // if (sequence.length > array.length) return false
  // if (sequence.length === 1 && array.includes(sequence[0])) return true

  // let newArr = [...array]

  // for (let i = 0; i < sequence.length; i++) {
  //   const index = newArr.indexOf(sequence[i])
  //   if (index < 0) {
  //     return false
  //   } else {
  //     if (i === sequence.length - 1) return true
  //     newArr = newArr.slice(index + 1)
  //   }
  // }
  let arrIndex = 0
  let seqIndex = 0

  while (arrIndex < array.length && seqIndex < sequence.length) {
    if (array[arrIndex] === sequence[seqIndex]) seqIndex++
    arrIndex++
  }

  return seqIndex === sequence.length
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
