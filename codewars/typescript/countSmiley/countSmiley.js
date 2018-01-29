var countSmiley = function (arr) {
    return arr.filter(function (data) {
        return /^[:;][-~]?[)D]$/.test(data);
    }).length;
};
var arr = [';~(', ';o)', ';oD', ';-D', ':)', ';~)', ':~>'];
console.log(countSmiley(arr));
