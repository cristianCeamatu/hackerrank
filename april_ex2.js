// Al K-lea maxim în cazul în care K este strict pozitiv
// Al K-lea minim(|K|) în cazul în care K este strict negativ
// Dacă |K| este mai mare decât numărul de elemente distincte din mulțime, al K-lea minim sau maxim se va calcula reluând numărătoarea asupra elementelor existente
// dacă K este 0 se va returna -1
function celMaiKNumar(arr, k) {
  // Write your code here
  if (arr.length === 1) return arr[0]

  const sortUniq = [...new Set([...arr].sort())]
  console.log(sortUniq)

  if (k > 0) {
    const times = k > sortUniq.length ? k % sortUniq.length : k
    const max = sortUniq[sortUniq.length - times]
    console.log(max)
    return arr.lastIndexOf(max)
  } else if (k < 0) {
    const times =
      Math.abs(k) > sortUniq.length
        ? Math.abs(k) % sortUniq.length
        : Math.abs(k)
    const min = sortUniq[times - 1]
    console.log(min)
    return arr.lastIndexOf(min)
  }

  if (k === 0) return -1
  // console.log(sortUniq)
}

// function celMaiKNumar(arr, k) {
//   let max = -1
//   let res = -1
//   let x = [...arr]
//   let ar = []
//   if (k > 0) ar = [...arr.sort((a, b) => b - a)]
//   if (k < 0) {
//     ar = [...arr.sort((a, b) => a - b)]
//     k = Math.abs(k)
//   }
//   if (k == 0) return -1
//   ar = ar.filter((a, i) => ar.indexOf(a) === i)
//   console.log(ar)
//   if (k > ar.length) {
//     k = k - ar.length
//   }
//   ar.map((val, index) => {
//     if (k > 0 && max != val) {
//       max = val
//       k--
//       res = val
//     }
//     max = val
//   })

//   let r = 0
//   x.forEach((el, i) => {
//     if (el === res) {
//       r = i
//     }
//   })
//   return r
// }

console.log(celMaiKNumar([1, 2, 3, 4, 5, 6, 6, 2, 3, 1, 5, 7], 3))
console.log(celMaiKNumar([1, 2, 3, 4, 5, 6, 6, 2, 3, 1, 5, 7], -5))
console.log(celMaiKNumar([1, 2, 2, 3, 7, 1, 4], 7))
console.log(celMaiKNumar([0], -255))
