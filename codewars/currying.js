
let dragon = 
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'
let dragonName = dragon('Yuuki')
let dragonSize = dragonName('cute')
let output = dragonSize('ice')

console.log(output)
