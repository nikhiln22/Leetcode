/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let filtered1 = [...set1].filter((num) => !set2.has(num));
    let filtered2 = [...set2].filter((num) => !set1.has(num));
    return [filtered1, filtered2]
};