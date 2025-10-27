/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

var arrayStringsAreEqual = function (word1, word2) {
    let join1 = word1.join("").split("");
    let join2 = word2.join("").split("");

    if (join1.length !== join2.length) return false;

    for (let i = 0; i < join1.length; i++) {
        if (join1[i] !== join2[i]) {
            return false;
        }
    }

    return true;
};