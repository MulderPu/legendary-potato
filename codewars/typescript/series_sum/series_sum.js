function series_sum(n) {
    var result = 0;
    var temp = 4;
    for (var i = 1; i < n + 1; i++) {
        if (i == 2) {
            result += 1 / temp;
        }
        else if (i > 2) {
            console.log('temp 2 = ' + temp);
            temp += 3;
            result += 1 / temp;
            console.log('temp 3 =' + temp);
        }
        else {
            result += i;
        }
        console.log('temp' + temp);
        console.log('result' + result);
    }
    return String(result.toFixed(2));
}
console.log(series_sum(3));
