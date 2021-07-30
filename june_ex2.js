function oraMeci(oraLocala, locatii) {
  // Write your code here
  const ora = +oraLocala.substr(11, 5).split(':').join('.')
  const data = oraLocala.substr(0, 10).split('-').reverse()
  console.log(oraLocala.substr(19, 6)[0])
  console.log(oraLocala.substr(20, 6).split(':').join('.'))
  const utc = +(
    oraLocala.substr(19, 6)[0] + oraLocala.substr(20, 6).split(':').join('.')
  )
  console.log(ora)
  console.log(utc)

  const ress = [...locatii].map((locatie) => {
    const value = locatie.split(':')[0]
    const lUtc = +locatie.split(':')[1]

    const diff = lUtc - utc

    let oraNoua = ora + diff
    if (ora + diff > 24) {
      data[0] = +data[0] + 1
      oraNoua = oraNoua - 24
    } else if (ora + diff < 0) {
      data[0] = +data[0] - 1
      oraNoua = 24 + oraNoua
    }
    console.log(diff)
    return (
      value +
      '-' +
      data.join('-') +
      '(' +
      String(oraNoua).padStart(2, '0') +
      ':' +
      '00' +
      ')'
    )
  })

  console.log(ress)
  return ress.join(' ')
}

console.log(
  oraMeci('2021-06-23T20:00:00+04:00', [
    'Suceava:+3',
    'Milan:+2',
    'Kamchatka:+12',
    'NewYork:-4',
  ])
)
