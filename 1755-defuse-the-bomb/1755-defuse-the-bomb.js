/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);
    
    if (k === 0) return result;
    
    const direction = k > 0 ? 1 : -1;
    k = Math.abs(k);
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            let index = (i + j * direction + n) % n;
            sum += code[index];
        }
        result[i] = sum;
    }
    
    return result;
};