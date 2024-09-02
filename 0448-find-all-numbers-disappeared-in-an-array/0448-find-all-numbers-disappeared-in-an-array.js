/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let set = new Set([...nums])
    let op = []
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            op.push(i)
        }
    }
    return op
};