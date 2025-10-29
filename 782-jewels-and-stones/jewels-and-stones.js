/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let jw = jewels.split("");
    let st = stones.split("");

    let count = 0;

    for (let i = 0; i < st.length; i++) {
        for (let j = 0; j < jw.length; j++) {
            if (st[i] === jw[j]) {
                count++
            }
        }
    }
    return count;
};