/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let letters = new Set(s);
    let greatest = '';
    for (let char of s) {
        let upperChar = char.toUpperCase();
        let lowerChar = char.toLowerCase();
        if (letters.has(upperChar) && letters.has(lowerChar)) {
            if (upperChar > greatest) {
                greatest = upperChar;
                console.log(greatest);
            }
        }
    }
    return greatest;
};