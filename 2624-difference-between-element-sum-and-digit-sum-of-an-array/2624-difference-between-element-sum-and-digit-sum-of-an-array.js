/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < nums.length; i++) {
        sum1 = sum1 + nums[i];
    }
    for (let j = 0; j < nums.length; j++) {
        let String = nums[j].toString();
        for (let k = 0; k < String.length; k++) {
            sum2 = sum2 + parseInt(String[k]);
        }
    }
    return Math.abs(sum1 - sum2);
};