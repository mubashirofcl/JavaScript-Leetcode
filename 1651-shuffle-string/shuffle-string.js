/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let string = s.split("");
    let result = []
    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = string[i];
    }

    let out = result.join("")
    return out
};