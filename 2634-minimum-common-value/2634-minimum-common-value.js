/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let set = new Set(nums1);
    let common = nums2.filter((num) => set.has(num));
    if (common.length === 0) return -1;
    else return Math.min(...common);
};