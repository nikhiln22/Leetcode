/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let arr = [];
    let largest = Math.max(...nums);
    let smallest = Math.min(...nums);
    for (let i = 1; i <= smallest; i++) {
        if (largest % i === 0 && smallest % i === 0) {
            arr.push(i);
        }
    }
    return Math.max(...arr)
};