function optionale(studenti) {
  // Write your code herse

  if (studenti.length === 0) return []
  const nr = studenti.length;
  const x = studenti.map(el => JSON.parse(el))
  const stud = x.sort((a, b) => b.media - a.media)

  let max = 10
  const PS = []
  const CC = []

  if (nr > 20) {
    max = Math.ceil(nr / 2)
  }

  stud.forEach((el) => {
    console.log(el)

    if (el.optiune === 'PS') {
      PS.length >= max ? CC.push(el.nume) : PS.push(el.nume)
    }

    if (el.optiune === 'CC') {
      CC.length >= max ? PS.push(el.nume) : CC.push(el.nume)
    }
  })

  return [`PS:${PS.join()}`, `CC:${CC.join()}`]
}

console.log(
  optionale(
    [
      '{"nume":"AdiTilea","media":9.0,"optiune":"PS"}',
      '{"nume":"CostiDimir","media":7.5,"optiune":"CC"}',
      '{"nume":"ElenaFunar","media":9.2,"optiune":"PS"}'
    ]
  )
)
