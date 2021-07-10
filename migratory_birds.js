function migratoryBirds(arr) {
  // Write your code here
  const n = arr.length
  const map = {}
  let min = 0
  let minEl = -1

  // loop half of the arr
  for (let i = 0; i < arr.length / 2; i++) {
    const el = arr[i]
    const lastEl = arr[n - i]

    map[el] = map[el] ? ++map[el] : 1
    if (lastEl) map[lastEl] = map[lastEl] ? ++map[lastEl] : 1
  }

  for (const key in map) {
    if (map[key] > min) {
      minEl = key
      min = map[key]
    } else if (map[key] === min && key < minEl) {
      minEl = key
      min = map[key]
    }
  }

  return minEl
}

console.log(migratoryBirds([1, 1, 2, 2, 3]))
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))
