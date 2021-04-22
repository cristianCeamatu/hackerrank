// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appCount = 0
  apples.forEach((apple) => {
    if (a + apple >= s && a + apple <= t) appCount++
  })

  let orCount = 0
  oranges.forEach((orange) => {
    if (b + orange <= t && b + orange >= s) orCount++
  })

  console.log(appCount)
  console.log(orCount)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])
