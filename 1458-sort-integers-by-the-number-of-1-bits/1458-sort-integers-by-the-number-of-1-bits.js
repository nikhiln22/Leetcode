/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    let numWithBits = arr.map((num) => {
        let binaryString = num.toString(2);
        let count = 0;
        for (let num of binaryString) {
            if (num === '1') {
                count++;
            }
        }
        return { num: num, bitCount: count };
    });

    numWithBits.sort((a, b) => {
        if (a.bitCount === b.bitCount) {
            return a.num - b.num;
        }
        return a.bitCount - b.bitCount;
    });
    return numWithBits.map((item) => item.num);
};