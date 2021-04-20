// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  const subs = []

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      subs.push(s.substring(i, j).split('').sort().join(''))
    }
  }

  subs.sort()
  let count = 0
  let i = 0

  while (i < subs.length) {
    let j = i + 1

    while (subs[i] === subs[j]) {
      count++
      j++
    }

    i++
  }

  console.log(count)
}

sherlockAndAnagrams('abba')
// sherlockAndAnagrams('abcd')
