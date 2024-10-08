/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    for (let a = 1; a < n; a++) {
        b = n - a;
        if (!String(a).includes('0') && !String(b).includes('0')) {
            return [a, b];
        }
    }
    return [];
};