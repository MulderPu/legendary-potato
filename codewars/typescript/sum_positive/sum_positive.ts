let sumPositive = (arr:number[]) : number => {
  let positive = arr.filter(function(arr) {
    return arr > 0
  });
  
  let result = positive.reduce((result, num) => {
      return result + num
    }, 0)
  
  return result 
}

let arr:number[] = [1,2,3,4,5,-6]
console.log(sumPositive(arr))
