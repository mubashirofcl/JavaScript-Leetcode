/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let l = 0, r = 0, u = 0, d = 0;
    for (let move of moves) {
        if (move === 'L') l++;
        else if (move === 'R') r++;
        else if (move === 'U') u++;
        else if (move === 'D') d++;
    }
    return l === r && u === d;
};