/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n <= 1) return n;
    let prev1 = 1;
    let prev2 = 1;
    let prev3 = 0;
    for (let i = 3; i <= n; i++) {
        let current = prev3 + prev2 + prev1;
        prev3 = prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1
};