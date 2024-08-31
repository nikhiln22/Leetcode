/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let largest = Math.max(...nums);
    let maxIndex = nums.indexOf(largest)

    for (let num of nums) {
        if (num != largest && largest < 2 * num) return -1
    }
    return maxIndex
};