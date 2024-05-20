/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let res = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            count++;
        }
        if (count % 2 === 0 && s[i] === '*') {
            res++;
        }
    }
    return res;
};