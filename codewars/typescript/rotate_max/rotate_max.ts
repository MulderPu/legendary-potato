function rotate_max(n:number):number {
  let numbersInArray = ('' + n).split('')
  const max = numbersInArray
    .map((element, index, array) => {
      array.splice(index, 1)
      array.push(element)
      return +array.join('')
    })
    .reduce((a, b) => Math.max(a, b))

  return Math.max(max, n)
}

let number:number = 38458215
console.log(rotate_max(number))
