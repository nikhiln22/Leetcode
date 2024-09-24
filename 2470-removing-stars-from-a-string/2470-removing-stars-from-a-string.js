/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let arr = [];
    for (let char of s) {
        if (char === '*') {
            arr.pop();
        } else {
            arr.push(char);
        }
    }
    return arr.join('')
};