/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let digits = x.toString().split("").map(Number);
    let sum = digits.reduce((acc, curr) => acc + curr, 0);

    if (x % sum === 0) {
        return sum;
    } else {
        return -1;
    }
};