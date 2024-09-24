/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let occurances = new Map();
    console.log(occurances);
    for (let i = 0; i < arr.length; i++) {
        if (occurances.has(arr[i])) {
            occurances.set(arr[i], occurances.get(arr[i]) + 1);
        } else {
            occurances.set(arr[i], 1);
        }
    }
    let values = Array.from(occurances.values()).sort((x, y) => x - y);
    for (let j = 0; j < values.length; j++) {
        if (values[j] == values[j + 1]) {
            return false;
        }
    }
    return true
};