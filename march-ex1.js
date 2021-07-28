function totalCombinatiiParole(indiciu) {
  // Write your code here
  const vocale = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const curVocale = []

  let res = 1
  if (!indiciu.includes('_')) return 1
  if (
    indiciu
      .slice(0, indiciu.indexOf('_'))
      .split('')
      .every((el) => !vocale.includes(el))
  )
    return -1

  for (let i = 0; i < indiciu.length; i++) {
    if (vocale.includes(indiciu[i]) && !curVocale.includes(indiciu[i])) {
      curVocale.push(indiciu[i])
    }

    if (indiciu[i] === '_') {
      res *= curVocale.length
    }
  }
  console.log(curVocale)
  return res
}

// console.log(totalCombinatiiParole('paroled_test'))
console.log(totalCombinatiiParole('parolafaraunderscore'))
