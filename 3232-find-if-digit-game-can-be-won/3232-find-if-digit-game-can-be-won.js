/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleSum = 0, doubleSum = 0;
    for (let num of nums) {
        if (num < 10) {
            singleSum += num;
        } else {
            doubleSum += num;
        }
    }
    return singleSum != doubleSum;
};