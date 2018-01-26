var switchItUp = function (num) {
    var result;
    switch (num) {
        case 0:
            result = "Zero";
            break;
        case 1:
            result = "One";
            break;
        case 2:
            result = "Two";
            break;
        case 3:
            result = "Three";
            break;
        case 4:
            result = "Four";
            break;
        case 5:
            result = "Five";
            break;
        case 6:
            result = "Six";
            break;
        case 7:
            result = "Seven";
            break;
        case 8:
            result = "Eight";
            break;
        case 9:
            result = "Nine";
            break;
        case 10:
            result = "Ten";
            break;
        default:
            result = num.toString();
    }
    return result;
};
var num = 3;
console.log(switchItUp(num));
