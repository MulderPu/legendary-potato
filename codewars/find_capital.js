var capitals = (word) => {
  var array = word.split('')
  var capitals = array.map((data) => {
    return data === data.toUpperCase() ? array.indexOf(data) : ''
  }).filter((data) => {
    return data !== ''
  })
  return capitals
}

var word = 'CodEWaRs'
console.log(capitals(word))
