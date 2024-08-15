/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

    let rightLeft = 0;
    let upDown = 0;

    for (let move of moves) {
        if (move === 'U') {
            upDown = upDown + 1;
        } else if (move === 'D') {
            upDown = upDown - 1;
        } else if (move === 'R') {
            rightLeft = rightLeft + 1;
        } else if (move === 'L') {
            rightLeft = rightLeft - 1;
        }
    }
    return rightLeft === 0 && upDown === 0
};