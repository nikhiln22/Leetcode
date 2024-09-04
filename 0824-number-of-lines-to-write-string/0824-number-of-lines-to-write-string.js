/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    lines = 1
    len = 0

    for (let i = 0; i < s.length; i++) {
        len += widths[s.charCodeAt(i) - 97]
        if (len > 100) {
            lines++
            len = widths[s.charCodeAt(i) - 97]
        }
    }

    return [lines, len]
};