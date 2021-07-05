// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
function getTotalX(a, b) {
  // Write your code here
  let count = []
  const aLast = a[a.length - 1]

  for (let i = aLast; i <= b[0]; i += aLast) {
    // console.log(`i`, i)
    if (a.every(el => i % el === 0) && b.every(el => el % i === 0)) count.push(i)
  }
  
  return count.length
}


console.log(getTotalX([2, 6], [24, 36]));
console.log(getTotalX([2, 4], [16, 32, 96]));