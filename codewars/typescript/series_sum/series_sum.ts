function series_sum(n:number):string {
  let result:number = 0; 
  let temp:number = 4
  for (let i=1; i<n+1; i++) {
    if (i == 2) {
      result += 1/temp 
    } else if (i > 2) {
      temp += 3
      result += 1 / temp
    } else {
      result += i
    }
  }
  return String(result.toFixed(2));
}

console.log(series_sum(3))
