function rotate_max(n) {
    var numbersInArray = ('' + n).split('');
    var max = numbersInArray
        .map(function (element, index, array) {
        array.splice(index, 1);
        array.push(element);
        return +array.join('');
    })
        .reduce(function (a, b) { return Math.max(a, b); });
    return Math.max(max, n);
}
var number = 38458215;
console.log(rotate_max(number));
