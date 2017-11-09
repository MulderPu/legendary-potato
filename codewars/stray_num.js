function stray (numbers) {
  var array = numbers.slice().sort()
  var results = []
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i + 1] === array[i]) {
      results.push(array[i])
    }
  }
  var value = numbers.filter(function (val) {
    return val != results[0].toString()
  })
  return value[0]
}

var numbers = [17, 17, 2, 17]
console.log(stray(numbers))
