/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let filtered = [...new Set(nums)].sort((a, b) => b - a);
    if (filtered.length < 3) return Math.max(...filtered)
    return filtered[2]
};