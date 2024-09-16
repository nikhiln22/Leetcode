/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    let count1 = {};
    let count2 = {};


    for (let char of word1) {
        count1[char] = (count1[char] || 0) + 1;
    }

    for (let char of word2) {
        count2[char] = (count2[char] || 0) + 1;
    }

    if (Object.keys(count1).sort().join('') !== Object.keys(count2).sort().join('')) {
        return false;
    }

    let values1 = Object.values(count1).sort((a, b) => a - b);
    let values2 = Object.values(count2).sort((a, b) => a - b);

    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) {
            return false;
        }
    }
    return true;
};
