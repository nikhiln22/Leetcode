/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    let convertedNumber = n.toString(k);
  
    let sum = 0;
    for (let digits of convertedNumber) {
        sum+=parseInt(digits);
    }
    return sum
};