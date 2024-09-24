/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let n = nums.length;
    let maxOccurance = Math.floor(n / 3);
    
    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    let elem = [];

    for (let [key, value] of map) {
        if (value > maxOccurance) {
            elem.push(key)
        }
    }
    return elem;
};