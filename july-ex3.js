function virusologie(stiva, start = 0) {
  var operations = {
    '+': function (operand1, operand2) {
      return operand1 + operand2
    },
    '-': function (operand1, operand2) {
      return operand1 - operand2
    },
    '*': function (operand1, operand2) {
      return operand1 * operand2
    },
    '%': function (operand1, operand2) {
      return operand1 / operand2
    },
  }

  function accumulate(list, operator) {
    return list.reduce(operations[operator])
  }

  
  // Write your code here
  const stiv = stiva.map((el) => JSON.parse(el))
  console.log(stiv)
  let keys = []
  let tempStack = []
  // let opTillKey = {}
  let res = start
  // let times = 0
  // let keyed = false

  while (stiv.length > 0) {
    let cur = stiv.pop()
    if (!Object.keys(cur).includes('$')) {
      tempStack.push(cur) 
    }

    Object.keys(cur).forEach((key) => {
      if (key === '$') {
        console.log(tempStack)
        keys.push({times: cur[key], stack: tempStack})
      } else {
        console.log(`${res}${key}${cur[key]}`)
        res = accumulate([res, cur[key]], key)
      }
    })
  }
  console.log(keys)
  // for (let i = 0; i < times; i++) {
  //   Object.keys(opTillKey).forEach((key) => {
  //     if (key === '$') {
  //       times = opTillKey[key]
  //       keyed = true
  //     } else {
  //       console.log(`${res}${key}${opTillKey[key]}`)
  //       res = accumulate([res, opTillKey[key]], key)
  //     }
  //   })
  // }
  keys.forEach(key => {
    let i = 0
    console.log(key)
    while (i < key.times) {
      res = res + virusologie(key.stack.map(el => JSON.stringify(el)), res)
      i++
    }
  })
  console.log(res)
  return res
}

console.log(
  virusologie(['{"+":3,"-":2}', '{"*":2,"$":2}', '{"+":3,"-":1,"*":4,"%":2}'])
)
