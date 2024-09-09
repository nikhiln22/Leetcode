/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
    let str1 = num1.toString().padStart(4, 0);
    let str2 = num2.toString().padStart(4, 0);
    let str3 = num3.toString().padStart(4, 0);

    let key = '';
    
    for (let i = 0; i < 4; i++) {
        let digit = Math.min(parseInt(str1[i]), parseInt(str2[i]), parseInt(str3[i]));
        key += digit;
    }

    return parseInt(key)
};