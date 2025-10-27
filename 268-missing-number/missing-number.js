/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let size = nums.length;
    let count = -1;
    let sort = nums.sort((a, b) => a - b);

    for (values of sort) {
        if (values != ++count) {
            return count;
        }
    }

    return size;
};