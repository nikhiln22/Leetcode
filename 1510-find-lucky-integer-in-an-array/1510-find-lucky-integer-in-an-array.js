/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let freq = {};
    for (let num of arr) {
        if (freq[num]) freq[num]++;
        else freq[num] = 1;
    }
   
    let luckyNumber = -1;

    for (let key in freq) {
        if (freq[key] === Number(key)) {
            luckyNumber = Math.max(luckyNumber, Number(key))
        }
    }
    return luckyNumber
};