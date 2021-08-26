function optionale(studenti, nr) {
  // Write your code herse
  console.log('studenti', studenti)
  const studenti2 = studenti.map((el) => JSON.parse(el))

  if (studenti.length === 0) return ['PS:', 'CC:']
  let max = 10
  let PS = []
  let CC = []

  if (nr > 20) {
    max = Math.ceil(nr / 2)
  }

  while (studenti2.length > 0) {
    const stud = studenti2.pop()
    console.log(stud)
    if (stud.optiune === 'PS') {
      PS.push(stud)
    }

    if (stud.optiune === 'CC') {
      CC.push(stud)
    }
  }

  PS = PS.sort((a, b) => {
    if (b.media - a.media === 0) return a.nume > b.nume ? 1: -1
    else return b.media - a.media
  })
  CC = CC.sort((a, b) => {
    if (b.media - a.media === 0) return a.nume > b.nume ? 1: -1
    else return b.media - a.media
  })
  console.log(PS)
  console.log(CC)

  if (PS.length > max) {
    const extra = PS.slice(max)
    console.log(extra)
    PS = PS.slice(0, max)
    CC = [...CC, ...extra].sort((a, b) => {
      if (b.media - a.media === 0) return a.nume > b.nume ? 1: -1
      else return b.media - a.media
    })
    console.log(CC)
  }

  if (CC.length > max) {
    const extra = CC.slice(max)
    console.log(extra)
    CC = CC.slice(0, max)
    PS = [...PS, ...extra].sort((a, b) => {
      if (b.media - a.media === 0) return a.nume > b.nume ? 1: -1
      else return b.media - a.media
    })
    console.log(PS)
  }

  return [
    `PS:${PS.map((el) => el.nume).join()}`,
    `CC:${CC.map((el) => el.nume).join()}`,
  ]
}

console.log(
  optionale(
    [
      '{"nume":"AdiTilea","media":9.0,"optiune":"PS"}',
      '{"nume":"CostiDimir","media":7.5,"optiune":"CC"}',
      '{"nume":"ElenaFunar","media":9.2,"optiune":"PS"}',
    ],
    3
  )
)

console.log(
  optionale(
    [
      "{ nume: 'LucianVulpes', media: 9.2, optiune: 'PS' }",
      "{ nume: 'MariusDuduman', media: 9.1, optiune: 'CC' }",
      "{ nume: 'CameliaCojocaru', media: 8.3, optiune: 'PS' }",
      "{ nume: 'BeatrixEliade', media: 9.6, optiune: 'CC' }",
      "{ nume: 'MadalinaAlbu', media: 8.4, optiune: 'PS' }",
      "{ nume: 'CosteaDumitrescu', media: 9.35, optiune: 'PS' }",
      "{ nume: 'SergiuBlerinca', media: 8.75, optiune: 'PS' }",
      "{ nume: 'NicolasCinca', media: 7.96, optiune: 'PS' }",
      "{ nume: 'AnaHasdeu', media: 8.8, optiune: 'CC' }",
      "{ nume: 'MarioaraGroza', media: 8.6, optiune: 'PS' }",
      "{ nume: 'TiberiuVladimiri', media: 9.3, optiune: 'PS' }",
      "{ nume: 'DumitraVladu', media: 9.5, optiune: 'PS' }",
      "{ nume: 'SergiuBelododia', media: 7.6, optiune: 'PS' }",
      "{ nume: 'IosifParasca', media: 9.15, optiune: 'CC' }",
      "{ nume: 'CostinNita', media: 8.9, optiune: 'PS' }",
      "{ nume: 'BogdanBalcescu', media: 9, optiune: 'CC' }",
      "{ nume: 'MagdalenaNicolae', media: 7.2, optiune: 'PS' }",
      "{ nume: 'AuricaPlesu', media: 8, optiune: 'CC' }",
      "{ nume: 'ElenaFunar', media: 9.2, optiune: 'PS' }",
      "{ nume: 'AdelinaPresecan', media: 8.4, optiune: 'PS' }",
      "{ nume: 'CostiDimir', media: 7.5, optiune: 'CC' }",
      "{ nume: 'AdiTilea', media: 9, optiune: 'PS' }",
    ],
    22
  )
)
