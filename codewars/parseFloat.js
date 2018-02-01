let parseF = (s) => {
  if (isNaN(parseFloat(s))){
    return null
  }
  return parseFloat(s)
}

let n = "2.5"
console.log(parseF(n))
