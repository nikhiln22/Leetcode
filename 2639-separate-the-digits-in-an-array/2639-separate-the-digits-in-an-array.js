/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let digits = nums[i].toString().split('').map(Number);
        result.push(...digits);
    }
    return result
};