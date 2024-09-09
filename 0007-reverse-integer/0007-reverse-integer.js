/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reverse = x.toString().split('').reverse();
    if (reverse[reverse.length - 1] === '-') {
        let removed = reverse.splice(reverse.length - 1, 1);
        reverse.unshift('-');
    }
    let val = reverse.join('')
    return val > 2147483647 ? 0 : val < -2147483648 ? 0 : val
};