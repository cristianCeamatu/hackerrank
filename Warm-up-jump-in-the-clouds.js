// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jumps = 0
  let i = 0

  while (i < c.length - 1) {
    if (c[i + 2] === 0) {
      i += 2
    } else {
      i++
    }
    console.log(i)
    jumps++
  }

  console.log(jumps)
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
