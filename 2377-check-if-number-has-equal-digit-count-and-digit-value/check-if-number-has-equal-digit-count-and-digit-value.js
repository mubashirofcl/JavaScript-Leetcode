/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    for (let i = 0; i < num.length; i++) {
        let count = 0;
        for (o of num) {
            if (i == o) count++
        }
        if (num[i] != count) return false
    }
    return true
};