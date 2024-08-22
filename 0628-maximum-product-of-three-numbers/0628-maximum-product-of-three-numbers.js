/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => b - a);
    let product1 = nums[0] * nums[1] * nums[2];
    let product2 = nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
    return Math.max(product1, product2);
};