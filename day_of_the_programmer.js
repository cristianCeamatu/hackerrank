function dayOfProgrammer(year) {
  // Write your code here
  let day = 0

  if (year <= 1917) {
    day = year % 4 === 0 ? 12 : 13
  } else if (year >= 1918) {
    day = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 12 : 13
    if (year === 1918) day += 14
  }

  return `${day}.09.${year}`
}

console.log(dayOfProgrammer(1984))
console.log(dayOfProgrammer(2017))
console.log(dayOfProgrammer(2016))
console.log(dayOfProgrammer(1918))
console.log(dayOfProgrammer(1800))
console.log(dayOfProgrammer(1918))
