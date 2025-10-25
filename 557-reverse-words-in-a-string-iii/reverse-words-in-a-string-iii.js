/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split("").reverse().join('');
    let rev = arr.split(" ").reverse().join(' ');
    return rev;
};