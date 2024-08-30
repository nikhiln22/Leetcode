/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let freq = {};

    for (let char of s) {
        if (freq[char]) freq[char]++;
        else freq[char] = 1;
    }

    let values = Object.values(freq);

    let filtered = new Set(values);

    return true ? filtered.size === 1 : false
};