/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b);
    let missingNumber = 1;
    let freq = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == missingNumber) missingNumber++;
    }
    
    for (let num of nums) {
        if (freq[num]) freq[num]++;
        else freq[num] = 1;
    }

    for (let num of nums) {
        if (freq[num] === 2) {
            return [num, missingNumber]
        }
    }
};