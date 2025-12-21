/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let X = 0;
    operations.forEach(op => {
        if (op.includes("++")) {
            X++;
        } else {
            X--;
        }
    });

    return X;
};