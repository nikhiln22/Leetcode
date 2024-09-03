/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
     let arr = [];
    let count = 0;
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10 && arr[i] % 2 === 0) {
            count++;
        } else if (arr[i] >= 10) {
            let sum = 0;
            let n = arr[i];
            while (n > 0) {
                sum += n % 10;
                n = Math.floor(n / 10);
            }
            if (sum % 2 === 0) {
                count++;
            }
        }
    }
    return count
};