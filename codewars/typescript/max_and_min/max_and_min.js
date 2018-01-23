function min(list) {
    var i = 0;
    var temp = list[0];
    while (i < list.length) {
        if (temp >= list[i]) {
            temp = list[i];
        }
        i++;
    }
    return temp;
}
function max(list) {
    var i = 0;
    var temp = list[0];
    while (i < list.length) {
        if (temp <= list[i]) {
            temp = list[i];
        }
        i++;
    }
    return temp;
}
var array = [4 - 52, 56, 30, 29, -54, 0, -110];
console.log('Array = ' + array);
console.log("Min =" + min(array));
console.log("Max =" + max(array));
