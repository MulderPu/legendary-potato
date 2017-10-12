var calculateYears = (principal, interest, tax, desired) => {
  var year_count = 0

  while (principal < desired) {
    var earn_interest = 0
    var tax_eaten = 0
    var earn = 0
    earn_interest = principal * interest
    tax_eaten = earn_interest * tax
    earn = earn_interest - tax_eaten
    principal += earn
    year_count++
  }
  return year_count 
}

var principal = 1000
var interest = 0.05
var tax = 0.18
var desired = 1100
console.log(calculateYears(principal, interest, tax, desired))
