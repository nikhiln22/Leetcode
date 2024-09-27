/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freq = new Map();

    for (let num of nums) {
        if (freq.has(num)) {
            freq.set(num, freq.get(num) + 1);
        } else {
            freq.set(num, 1);
        }
    }

    let keys = [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a)).slice(0, k);

    return keys;
};