function zileLibere(an, listaZile) {
   // instantiate a date object
 
 // this line does the magic (in collab with the lines above)
  var daysInMonth = new Date(an, 2, 0).getDate();
  console.log(daysInMonth)

  // Write your code here
  if (listaZile.length === 0) return 0
  const fullDates = [... new Set(listaZile)]
    .map((el) => `${el}/${an}`)
    .map((el) => {
      const month = el.split('/')[0]
      const day = +el.split('/')[1]
      console.log(month)
      console.log(day)
      var daysInMonth = new Date(an, month, 0).getDate();
      console.log(daysInMonth)
      if (daysInMonth >= day && day > 0) {
        return new Date(el).getDay()
      }
      return false
    })
    .filter((el) => ![0, 6].includes(el) && typeof el === 'number')
  console.log(fullDates)
  return fullDates.length
}

console.log(zileLibere(2021, ['01/24', '06/01']))
console.log(zileLibere(2021, ['06/01', '06/01']))
console.log(zileLibere(2021, ['02/29', '04/31', '05/32']))
