var countCharacters = function (words, chars) {
    let charCount = {};


    for (let char of chars) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let sum = 0;

   
    for (let word of words) {
        let wordCount = {};
        let canForm = true;

       
        for (let char of word) {
            wordCount[char] = (wordCount[char] || 0) + 1;

            if (!charCount[char] || wordCount[char] > charCount[char]) {
                canForm = false;
                break;
            }
        }
        if (canForm) {
            sum += word.length;
        }
    }
    return sum;
};
