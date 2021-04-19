// Complete the repeatedString function below.
function repeatedString(s, n) {
  const countInString = s.split('').filter((char) => char === 'a').length
  console.log(countInString)
  const repeted = Math.floor(n / s.length)
  const remainder = n % s.length
  const remainderCount = s
    .slice(0, remainder)
    .split('')
    .filter((char) => char === 'a').length
  console.log(repeted)
  console.log(remainder)
  console.log(remainderCount)
  console.log(countInString * repeted + remainderCount)
  return countInString * repeted + remainderCount
}

repeatedString('abcac', 11)
