/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = s.trim().split(" ").length
    return s.trim().split(" ")[len - 1].length
};