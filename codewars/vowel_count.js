var getCount = (str) => {
  var vomelsCount = 0
  var count = str.match(/[aeiou]/gi)

  if (count === null) {
    vomelsCount = 0
  } else {
    vomelsCount = count.length
  }

  return vomelsCount
}
var str = 'aaaaar'
console.log(getCount(str))
