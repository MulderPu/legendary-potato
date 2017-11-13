var persistence = (num) => {
  var numChars = num.toString().match(/[0-9]/g).length
  var array = num.toString().split('').map(Number)
  var multiply
  var count = 0;
  while (numChars !== 1) {
    multiply = array.reduce((result, num) => {
      return result * num
    }, 1)
    numChars = multiply.toString().match(/[0-9]/g).length
    array = multiply.toString().split('').map(Number)
    count++
  }
  return count 
}

var num = 999
console.log(persistence(num))
