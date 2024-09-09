/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    let array = text.split(' ');

    array.sort((a, b) => a.length - b.length);
 
    let output = array.join(' ').toLowerCase();

    output = output.charAt(0).toUpperCase() + output.slice(1)

    return output
};