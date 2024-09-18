/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let merged = s1 + " " + s2;

    let words = merged.split(' ');

    let arr = [];
    let occurance = {};

    for (let word of words) {
        occurance[word] = (occurance[word] || 0) + 1;
    }

    for (let key in occurance) {
        if (occurance[key] === 1) {
            arr.push(key);
        }
    }

   return arr;

};