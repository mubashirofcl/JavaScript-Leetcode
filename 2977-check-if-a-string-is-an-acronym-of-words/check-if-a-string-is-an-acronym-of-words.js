/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        arr[i] = words[i][0]
    }
    return s === arr.join("") ? true : false;
};