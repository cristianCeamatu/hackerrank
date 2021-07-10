function pageCount(n, p) {
  // Write your code here
  return Math.min(Math.floor(p / 2), Math.floor(n / 2) - Math.floor(p / 2))
}

console.log(pageCount(5, 3))
console.log(pageCount(6, 2))
console.log(pageCount(5, 4))
console.log(pageCount(59867, 35733))
console.log(pageCount(96993, 70030))
