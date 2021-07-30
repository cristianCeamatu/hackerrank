// Complete the countSwaps function below.
function countSwaps(arr) {
  const swap = (a, b) => {
    if (a && b) {
      const temp = arr[b]
      console.log(temp)
      arr[b] = arr[a]
      arr[a] = temp
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        console.log(i)
        console.log(j)
        swap(i, j)
      }
    }
  }

  console.log(arr)
}

countSwaps([6, 4, 1])
