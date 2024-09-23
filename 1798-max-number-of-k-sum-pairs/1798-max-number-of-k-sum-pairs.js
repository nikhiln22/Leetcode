/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let start = 0;
    let end = nums.length - 1;
    let count = 0;
    while (start < end) {
        let sum = nums[start] + nums[end];
        if (sum === k) {
            count++
            start++;
            end--;
        } else if (sum < k) {
            start++;
        } else {
            end--;
        }
    }
    return count
};