function virusologie(stiva) {
  // Write your code here
  const stiv = stiva.map((el) => JSON.parse(el)).reverse();
  console.log(stiv)

  let res = 0

  stiv.forEach((el) => {
    let cur = 0

    Object.keys(el).forEach((key) => {
      console.log(key)
      if (key !== '$') {
        console.log(`${res}${key}${el[key]}`)
        const evals = eval(`${res}${key}${el[key]}`)
        res = evals
        console.log(res)
      }
    })
  })

  console.log(res)
}

console.log(
  virusologie(['{"+":3,"-":2}', '{"*":2,"$":2}', '{"+":3,"-":1,"*":4,"%":2}'])
)
