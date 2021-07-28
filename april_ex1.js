function elementulMagic(sir, element) {
  // Write your code here
  const index = sir.indexOf(element)
  console.log(index)
  return index > 0
    ? `Elementul magic se gaseste pe pozitia ${index}`
    : 'Sir trist'
}

console.log(elementulMagic([5, 4, 2], 3))
console.log(elementulMagic([6, 5, 4, 3], 4))
