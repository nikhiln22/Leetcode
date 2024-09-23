/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let prefixSum = [];
    let sum = 0;
    let total = nums.reduce((acc, curr) => acc + curr, 0);
    for (let i = 0; i < nums.length; i++) {
        prefixSum.push(sum);
        sum += nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        let leftSum = prefixSum[i]
        let rightSum = total - prefixSum[i] - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};