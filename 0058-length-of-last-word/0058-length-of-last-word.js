/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim().split(' ');
    for (let i = s.length - 1; i >= 0; i--) {
        return s[i].length;
    }
};