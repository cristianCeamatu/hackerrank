// caracterele de acelasi tip sunt grupate
// intre doua tipuri diferite de caractere trebuie sa existe cate un spatiu
// spatiile care nu sunt necesare sunt eliminate
// ordinea caracterelor din sirul initial este pastrata

function stringulAranjat(sirulLuiIonel) {
  // Write your code here
  if (sirulLuiIonel.length === 1) return sirulLuiIonel

  let curType = ''
  let res = ''

  for (let i = 0; i < sirulLuiIonel.length; i++) {
    const char = sirulLuiIonel[i]
    console.log(char)
    if (/[a-zA-Z]/.test(char)) {
      console.log(char)
      if (i === 0) {
        res += char
        curType = 'string'
      } else if (curType !== 'string') {
        res += ` ${char}`
        curType = 'string'
      } else {
        res += char
      }
    }

    if (/[0-9]/.test(char)) {
      console.log(char)
      if (i === 0) {
        res += char
        curType = 'number'
      } else if (curType !== 'number') {
        res += ` ${char}`
        curType = 'number'
      } else {
        res += char
      }
    }

    // Special
    if (!/[a-zA-Z]/.test(char) && !/[0-9]/.test(char) && !/[\s]/.test(char)) {
      console.log(char)
      if (i === 0) {
        res += char
        curType = 'special'
      } else if (curType !== 'special') {
        res += ` ${char}`
        curType = 'special'
      } else {
        res += char
      }
    }
  }

  return res.split('')
}

// console.log(stringulAranjat('AFE DG D454 [1+5]'))
// console.log(stringulAranjat('AC B""@ 145"45'))
// console.log(stringulAranjat("61AO12'"))
console.log(stringulAranjat(' 0 190I81 4E0}4 6 Q0Z&3'))
