/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let digits = n.toString().split('').map(Number);
    let product = digits.reduce((acc, curr) => acc * curr, 1);
    let sum = digits.reduce((acc, curr) => acc + curr, 0);

    return product - sum;
};