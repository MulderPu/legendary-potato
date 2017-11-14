var findOdd = (A) => {
  var results = A.reduce((ans, num) => {
    ans[num] = (ans[num] || 0) + 1
    return ans
  }, {})

  for (var key in results) {
    if (results.hasOwnProperty(key)) {
      if (results[key] % 2 !== 0) {
        return parseInt(key)
      }
    }
  }
}

var A = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]
console.log(findOdd(A))
