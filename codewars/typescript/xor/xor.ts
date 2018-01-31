let xor = (a:boolean, b:boolean):boolean => {
  if ((a === false && b === false) || (a === true && b === true)){
    return false  
  } else if ( (a === false && b === true) || ( a === true && b === false) ) {
    return true
  }
  return false
}

let a = false
let b = false

console.log(xor(a,b))
