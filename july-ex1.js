function caleaPiranesi(documente) {
  // Write your code here
  const docs = documente.map((el) => JSON.parse(el))
  let res = []
  while (docs.length > 0) {
    const harta = docs.pop()
    if (!Object.values(harta).some((el) => el.includes('D'))) {
      return res.join('-')
    } else {
      Object.keys(harta).forEach((el) => {
        if (harta[el].includes('D')) {
          res.push(harta[el].split('-')[0])
        }
      })
    }
  }
  return res.length === 0 ? '' : res.join('-')
}

console.log(
  caleaPiranesi(['{"c2":"NW-D","C2.1":"S-W"}', '{"c3.1":"E-W","c3.2":"SE-B"}'])
)

console.log(
  caleaPiranesi([
    '{"c2":"NW-D","C2.1":"S-W"}',
    '{"c3.1":"E-W","c3.2":"NE-B","c2":"NW-B","C2.1":"N-W"}',
    '{"c3.1":"E-W","c3.7":"E-W","c3.5":"NE-W","c3.2":"SE-D"}',
    '{"c2":"NW-D","C2.1":"S-W"}',
    '{"c3.1":"NE-D","c3.2":"SE-B"}',
  ])
)
