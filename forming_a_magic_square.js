function formingMagicSquare(s) {
  // Write your code here
  var perm = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ]

  let min = 1000

  for (let i = 0; i < perm.length; i++) {
    const magicSquare = perm[i]
    let sum = 0
    for (let x = 0; x < s.length; x++) {
      for (let y = 0; y < s[x].length; y++) {
        sum += Math.abs(magicSquare[x][y] - s[x][y])
      }
    }
    if (sum < min) min = sum
    sum = 0
  }

  return min
}

console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ])
)
