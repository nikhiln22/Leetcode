/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    arr.sort((a, b) => a - b);

    let trimmedCount = Math.floor(arr.length * 0.05);

    let sum = 0;
    let count = 0;

    for (let i = trimmedCount; i < arr.length - trimmedCount; i++) {
        sum += arr[i];
        count++;
    }

    let mean = sum / count;

    return mean
};