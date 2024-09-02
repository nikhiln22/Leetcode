/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
    let firstValue = coordinate1.split('');
    let secondValue = coordinate2.split('');
    firstValue[0] = coordinate1.charCodeAt(0);
    secondValue[0] = coordinate2.charCodeAt(0);

    sumRowCoordinate = parseInt(firstValue[0]) + parseInt(secondValue[0]);
    sumColumnCoordinate = parseInt(firstValue[1]) + parseInt(secondValue[1]);

    return (sumRowCoordinate % 2 === sumColumnCoordinate % 2)
};