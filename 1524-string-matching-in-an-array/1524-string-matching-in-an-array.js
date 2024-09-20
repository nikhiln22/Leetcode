/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let output = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i!=j && words[j].includes(words[i])) {
                output.push(words[i]);
            }
        }
    }
    return [...new Set(output)]
};