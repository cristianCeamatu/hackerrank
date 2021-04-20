function solve(meal_cost, tip_percent, tax_percent) {
  const tip = tip_percent / 100 * meal_cost
  const tax = tax_percent / 100 * meal_cost
  const total = Math.round(meal_cost + tax + tip)
  console.log(total)
  return total
}

console.log(solve(100, 15, 8))