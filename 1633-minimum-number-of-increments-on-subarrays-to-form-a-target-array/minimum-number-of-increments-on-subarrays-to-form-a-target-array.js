/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
    const n = target.length;
    let ans = target[0];
    for (let i = 1; i < n; ++i) ans += Math.max(target[i] - target[i - 1], 0);
    return ans;
};