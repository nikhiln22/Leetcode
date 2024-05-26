/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let letters = new Set(word);
    let count = 0;
    let found = new Set();
    for (let char of letters) {
        let lowerChar = char.toLowerCase();
        let upperChar = char.toUpperCase();
        if (letters.has(lowerChar) && letters.has(upperChar) && !found.has(lowerChar)) {
            count++;
            found.add(lowerChar);
            found.add(upperChar);
        }
    }
    return count;
};