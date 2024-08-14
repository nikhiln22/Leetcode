/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let binaryArray = [];
    for (let i = 0; i <= n; i++) {
        binaryArray.push(i.toString(2));
    }
    // console.log(binaryArray);
    let output = [];

    for (let j = 0; j < binaryArray.length; j++) {
        let count = 0;
        let elem = binaryArray[j].split('');
        for (let k = 0; k <= binaryArray[j].length; k++) {
            if (binaryArray[j][k] === '1') {
                count++;
            }

        }
        output.push(count);
    }
    return output
};