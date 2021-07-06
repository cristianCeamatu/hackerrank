

function birthday(s, d, m) {
  let count = 0;
    // Write your code here
  for (let i = 0; i <= s.length - m; i++) {
    const slice = s.slice(i, i + m)
    if (slice.reduce((a, b) => a + b) === d) {
    count++;
    }
  }

  return count;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))
console.log(birthday([1, 2, 1, 3, 2], 3, 2))
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2))
console.log(birthday([4], 4, 1))