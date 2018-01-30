var splitTheBill = function (x) {
    var result = {};
    var total = 0;
    var personCount = 0;
    for (var person in x) {
        personCount++;
        total += x[person];
    }
    for (var person in x) {
        result[person] = Math.round((x[person] - (total / personCount)) * 100) / 100;
    }
    return result;
};
var group = {
    A: 20,
    B: 15,
    C: 10
};
console.log(splitTheBill(group));
