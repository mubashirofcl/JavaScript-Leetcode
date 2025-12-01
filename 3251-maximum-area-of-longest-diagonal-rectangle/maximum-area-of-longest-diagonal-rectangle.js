/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {

    const diagLen = (x, y) => Math.sqrt(x ** 2 + y ** 2);

    let maxDiag = 0;
    let maxArea = 0;

    for (let [x, y] of dimensions) {

        const diag = diagLen(x, y);
        if (diag > maxDiag) {
            maxDiag = diag;
            maxArea = x * y;
        } else if (diag === maxDiag) {
            maxArea = Math.max(maxArea, x * y);
        }
    }

    return maxArea;
};