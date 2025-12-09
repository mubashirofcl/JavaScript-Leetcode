/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let WordSplit = s.split(" ");
    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(WordSplit[i])
    }
    return result.join(" ")
};