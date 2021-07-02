const mergeHalves = (arr, leftStart, rightEnd) => {
  const leftEnd = ~~((leftStart + rightEnd) / 2);
  const rightStart = leftEnd + 1
  console.log(`rightStart`, rightStart)
};

const mergeSort = (arr, result, left, right) => {
  if (right <= left) return
  const middle = ~~((left + right) / 2);
  mergeSort(arr,result, left, middle)
  mergeSort(arr, result, middle + 1, right)
  mergeHalves(arr, result, left, right)
}

function countInversions(arr) {
    // Write your code here
  const result = []
  mergeSort(arr, result, 0, arr.length - 1)
  return arr
}



console.log(countInversions([2, 4, 1]))