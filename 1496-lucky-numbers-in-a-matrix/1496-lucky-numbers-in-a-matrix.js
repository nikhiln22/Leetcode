/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const min=[]
    const pos=[]
    for(let row of matrix){
        let value = Math.min(...row)
        min.push(value);
        pos.push(row.indexOf(value))
    }
    let out=Math.max(...min)
    let index = pos[min.indexOf(out)]
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][index]>out) return []
    }
    return [out]
};