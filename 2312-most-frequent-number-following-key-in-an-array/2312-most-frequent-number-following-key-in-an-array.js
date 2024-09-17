/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    let freqMap = {};

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            let target = nums[i + 1];
            if (target in freqMap) {
                freqMap[target]++;
            } else {
                freqMap[target] = 1;
            }
        }
    }


    let maxCount = 0;
    let resultTarget = null;
    for (let target in freqMap) {
        if (freqMap[target] > maxCount) {
            maxCount = freqMap[target];
            resultTarget = parseInt(target);
        }
    }

    return resultTarget;
};
