/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let n = nums.length
    let num = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] < nums[j]) {
                num = Math.max(num , nums[j] - nums[i])
            }
        }
    }

    if (num === 0) {
        return -1
    } else {
        return num
    }

};