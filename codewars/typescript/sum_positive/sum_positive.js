var sumPositive = function (arr) {
    var positive = arr.filter(function (arr) {
        return arr > 0;
    });
    var result = positive.reduce(function (result, num) {
        return result + num;
    }, 0);
    return result;
};
var arr = [1, 2, 3, 4, 5, -6];
console.log(sumPositive(arr));
