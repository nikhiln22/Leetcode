/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let freq = {};
    let sneakyNumbers = [];
    for (let num of nums) {
        if (freq[num]) freq[num]++;
        else freq[num] = 1;
    }
    for (let key in freq) {
        if (freq[key] === 2) {
            sneakyNumbers.push(key)
        }
    }
    return sneakyNumbers
};