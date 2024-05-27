/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let str = s + s;
    let string = str.substring(1, str.length - 1);
    return string.includes(s)
};