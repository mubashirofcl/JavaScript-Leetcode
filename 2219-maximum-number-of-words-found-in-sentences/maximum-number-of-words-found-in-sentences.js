/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let result = 0;
    let arr = sentences.map((sentence) => sentence.split(" "))
    for (let values of arr) {
        if (values.length > result) {
            result = values.length
        }
    }

    return result
};