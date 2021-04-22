// Complete the countTriplets function below.
function countTriplets(arr, r) {
  // let count = 0

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     for (let k = j + 1; k < arr.length; k++) {
  //       if (arr[i] * r === arr[j] && arr[j] * r === arr[k]) {
  //         count++
  //       }
  //     }
  //   }
  // }

  // return count
  let count = 0
  const map = {}
  const doubles = {}

  for (let i = arr.length - 1; i >= 0; i--) {
    const x = arr[i]
    const rx = x * r
    const rx2 = rx * r

    let doubleWeWant = [rx, rx2]
    if (doubles[doubleWeWant] !== undefined) {
      console.log(`x, rx, rx2`, x, rx, rx2)
      count += doubles[doubleWeWant]
    }

    let possibleDouble = [x, rx]
    if (doubles[possibleDouble] === undefined) doubles[possibleDouble] = 0

    doubles[possibleDouble] += map[rx] ? map[rx] : 0

    map[x] = map[x] ? (map[x] += 1) : (map[x] = 1)
  }

  console.log(`doubles`, doubles)
  console.log(`map`, map)
  console.log(`count`, count)

  return count
}

countTriplets([1, 2, 2, 4], 2)
