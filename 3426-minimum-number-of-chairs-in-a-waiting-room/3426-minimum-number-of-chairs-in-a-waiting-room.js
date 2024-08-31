/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let currentPeople = 0;
    let maxPeople = 0;

    for (let char of s) {
        if (char === 'E') {
            currentPeople++;
            maxPeople = Math.max(currentPeople, maxPeople)
        } else if (char === 'L') {
            currentPeople--;
        }
    }
    return maxPeople
};