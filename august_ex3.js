function ultimaBacterie(n) {
  // Write your code here
  console.log(n)
  if (n === 1) return 1
  if (n === 2) return 1

  let arr = Array.from(Array(n).keys()).map((el) => el + 1)

  while (arr.length > 1) {
    const isOdd = arr.length % 2 !== 0
    arr = arr.filter((_, i) => i % 2 === 0)
    if (isOdd) {
      arr = [arr[arr.length - 1], ...arr.slice(0, -1)]
    }
  }

  return arr[0]
}

console.log(ultimaBacterie(6))
