/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let firstPosition = -1;
    let lastPosition = -1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === nums[middleIndex]) {
            firstPosition = middleIndex;
            rightIndex = middleIndex - 1;
        } else if (target < nums[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    leftIndex = 0;
    rightIndex = nums.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === nums[middleIndex]) {
            lastPosition = middleIndex;
            leftIndex = middleIndex + 1;
        } else if (target < nums[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return [firstPosition, lastPosition];

};