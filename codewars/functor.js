// A functor is form by accepting a value (array/string) and a function
let stringFunctor = (value, fn) => {
  let chars = value.split('')
  let result = chars.map((char) => {
    if (typeof char === 'string') {
      return String.fromCharCode(fn(char.charCodeAt(0)))
    }
    return fn(parseInt(char))
  })
  return result.join('')
}

let plus1 = (value) => { return value + 1 }
let minus1 = (value) => { return value - 1 }

let value = 'ABC' // can oso be 'abc', '123'
console.log(stringFunctor(value, plus1))
