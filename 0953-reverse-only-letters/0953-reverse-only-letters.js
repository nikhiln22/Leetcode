/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let array = s.split('');
    console.log(array);
    let letter = array.filter(char => /[a-zA-Z]/.test(char)).reverse();
    console.log(letter);
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (/[a-zA-Z]/.test(array[i])) {
            array[i] = letter[index];
            index++;
        }
    }
    return array.join('');
};