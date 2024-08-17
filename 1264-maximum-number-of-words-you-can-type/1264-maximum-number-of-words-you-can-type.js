/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(' ')
    const keys = brokenLetters.split('')
    let count = 0
    for(let i=0 ; i<words.length ; i++){
        for(let j=0 ; j<keys.length ; j++){
            if(words[i].includes(keys[j])){
                count++
                break
            }
        }
    }
    return words.length-count
};