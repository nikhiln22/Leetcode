/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let stringArray = s.split('');
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
    }

    let combined = stringArray.join('');

    for (let i = 0; i < k; i++) {
        let sum = 0;
        for (let num of combined) {
            sum += parseInt(num);
        }
        combined = sum.toString();
    } 
    return parseInt(combined)  
};