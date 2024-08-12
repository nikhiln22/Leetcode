/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for(let i=0 ; i<arr.length-1 ; i++){
        let greatest = arr[i+1]
        for(let j=i+2 ; j<arr.length ; j++){
            if(arr[j]>greatest) greatest = arr[j]
        }
     arr[i] = greatest
    
    }
    arr[arr.length-1] = -1
    return arr
};