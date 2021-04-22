// Complete the freqQuery function below.
function freqQuery(queries) {
  const res = []
  const freq = {}
  const map = {}

  queries.forEach((query) => {
    const [action, value] = query
    const temp = map[value] || 0

    if (action === 1) {
      map[value] = temp + 1
      freq[temp] = (freq[temp] || 0) - 1
      freq[temp + 1] = (freq[temp + 1] || 0) + 1
    } else if (action === 2) {
      if (map[value] > 0) {
        map[value] = temp - 1
        freq[temp - 1] += 1
        freq[temp] = -1
      }
    } else if (action === 3) {
      freq[value] ? res.push(1) : res.push(0)
    }
  })

  return res
}

console.log(
  freqQuery([
    [1, 5],
    [1, 6],
    [3, 2],
    [1, 10],
    [1, 10],
    [1, 6],
    [2, 5],
    [3, 2],
  ])
)
