function min(list: number[]) : number {
  let i:number = 0;
  let temp:number = list[0];
  while (i<list.length) {
    if (temp >= list[i]){
      temp = list[i];
    }
    i++;
  }
  return temp;
}

function max (list: number[]) : number {
  let i:number = 0;
  let temp:number = list[0];
  while (i<list.length) {
    if (temp <= list[i]){
      temp = list[i];
    }
    i++;
  }
  return temp; 
}


let array:number[] = [4-52, 56, 30, 29, -54, 0, -110]

console.log('Array = '+ array)
console.log("Min =" + min(array))
console.log("Max =" + max(array))
