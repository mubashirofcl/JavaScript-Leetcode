/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result = 0;
    for (const ch of s) {
        result ^= ch.charCodeAt(0);
    }
    for (const ch of t) {
        result ^= ch.charCodeAt(0);
    }
    return String.fromCharCode(result);
};

