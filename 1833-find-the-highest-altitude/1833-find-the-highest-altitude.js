/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let highestAltitude = 0;
    let gainDifference = 0;
    for (let elem of gain) {
        gainDifference += elem
        highestAltitude = Math.max(highestAltitude, gainDifference);
    }
    return highestAltitude
};