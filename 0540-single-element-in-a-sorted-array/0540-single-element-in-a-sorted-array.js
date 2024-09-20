/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let obj = {};

    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    
    for (let key in obj) {
        if (obj[key] === 1) {
            return parseInt(key);
        }
    }
};