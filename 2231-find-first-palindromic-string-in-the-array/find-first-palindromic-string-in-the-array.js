/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    let result = "";
    for (let str of words) {
        let rev = str.split("").reverse().join("")
        if (str === rev) {
            result = str
            break;

        }
    }
    return result;
};