/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let row1 = "qwertyuiopQWERTYUIOP";
    let row2 = "asdfghjklASDFGHJKL";
    let row3 = "zxcvbnmZXCVBNM";
    let output = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let row = 0;

        if (row1.includes(word[0])) {
            row = 1;
        } else if (row2.includes(word[0])) {
            row = 2;
        } else if (row3.includes(word[0])) {
            row = 3;
        }

        let sameRow = true;

        for (let j = 1; j < word.length; j++) {
            if (
                (row === 1 && !row1.includes(word[j])) || 
                (row === 2 && !row2.includes(word[j])) || 
                (row === 3 && !row3.includes(word[j]))
             ) {
                sameRow = false
                break;   
            }
        }
            if (sameRow) {
            output.push(word);
        }
        }   
    return output
};