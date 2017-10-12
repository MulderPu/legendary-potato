var XO = (str) => {
  var lowerCase = str.toLowerCase()
  var count_x = 0
  var count_o = 0
  for (var x in lowerCase) {
    if (lowerCase[x] === 'x') {
      count_x++
    }

    if (lowerCase[x] === 'o') {
      count_o++
    }
  }
  if (count_o === count_x) {
    return true
  } else {
    return false
  }

// shorter solution
// str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

var str = 'ooxXm'
console.log(XO(str))
