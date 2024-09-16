/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let i = 0, j = s.length - 1;
    let str = s.split("");
    let vowels = ["a", "e", "i", "o", "u", "A", "I", "O", "E", "U"]
    while (i < j) {
        if (!vowels.includes(str[i])) {
            i++;
        }
        else if (!vowels.includes(str[j])) {
            j--;
        } else {
            let char = str[i];
            str[i] = str[j]
            str[j] = char;
            i++;
            j--;
        }
    }
    return str.join("");
};