function findAnagrams(s) {
  const subs = []
  let count = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      subs.push(s.substring(i, j).split('').sort().join(''))
    }
  }

  subs.sort()
  console.log(subs)
  i = 0

  while (i < subs.length) {
    j = i + 1

    while (subs[i] === subs[j]) {
      count++
      j++
    }

    i++
  }

  console.log(count)
}

findAnagrams('abba')
