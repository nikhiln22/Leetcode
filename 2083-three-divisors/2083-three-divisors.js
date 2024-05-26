/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    let count = 0;
    let i = 1;
    while (i <= n) {
        if (n % i === 0) count++;
        i++;
    }
    if (count === 3) return true;
    else return false;
};