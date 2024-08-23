/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let xorResult = 0;
    for (let i = 0; i < n; i++) {
        xorResult ^= start + (2 * i);
    }
    return xorResult;
};
