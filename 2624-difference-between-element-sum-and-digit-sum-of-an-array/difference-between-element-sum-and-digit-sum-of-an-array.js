/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element = 0;
    let digit = 0;
    for (let i of nums) {
        element += i;
        let n = i;
        while (n > 0) {
            digit += n % 10;
            n = Math.floor(n / 10);
        }
    }
    return Math.abs(element - digit);
};
      