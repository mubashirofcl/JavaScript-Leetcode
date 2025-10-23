/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let largest = Math.max(...nums);
    let smallest = Math.min(...nums)
    let gcd = 1;

    for (let i = 1; i <= Math.min(largest, smallest); i++) {
        if (largest % i === 0 && smallest % i === 0) {
            gcd = i;
        }
    }

    return gcd;
};