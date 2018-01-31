var xor = function (a, b) {
    if ((a === false && b === false) || (a === true && b === true)) {
        return false;
    }
    else if ((a === false && b === true) || (a === true && b === false)) {
        return true;
    }
    return false;
};
var a = false;
var b = false;
console.log(xor(a, b));
