let splitTheBill = (x:Object):Object => {
  let result: Object = {};
  let total: number = 0;
  let personCount: number = 0;

  for (let person in x) {
    personCount++;
    total += x[person];
  }

  for (let person in x) {
    result[person] = Math.round((x[person] - (total / personCount)) * 100) / 100;
  }

  return result;
}

let group = {
  A: 20,
  B: 15,
  C: 10
}

console.log(splitTheBill(group))
