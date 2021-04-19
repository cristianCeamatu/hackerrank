function countingValleys(steps, path) {
  // Write your code here
  let pos = 0
  let valleys = 0

  path.split('').forEach((step) => {
    step === 'D' ? pos-- : pos++

    if (pos === 0 && step === 'U') {
      valleys++
    }
  })

  return valleys
}

console.log(countingValleys(8, 'UDDDUDUU'))
console.log(countingValleys(10, 'DUDDUUDDUU'))
