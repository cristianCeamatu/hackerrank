function putereaCaracterului(cuvant) {
  // Write your code here
  if (cuvant.length === 1) return `${cuvant} - 1`

  let litera = ''
  let putere = 0

  for (let i = 0; i < cuvant.length; i++) {
    // map[cuvant[i]] = map[cuvant[i]] ? map[cuvant[i]] + 1 : 1
    let curPower = 1

    while (cuvant[i + 1] === cuvant[i]) {
      curPower += 1
      i++
    }

    console.log(curPower)
  }
  return map
}

console.log(putereaCaracterului('xxyyttttruett'))
