/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let map = new Map();
    let result = [];


    for (let i = 0; i <= s.length - 10; i++) {
        let sub = s.substring(i, i + 10);

        map.set(sub, (map.get(sub) || 0) + 1);

        if (map.get(sub) === 2) {
            result.push(sub);
        }
    }

    return result;

};