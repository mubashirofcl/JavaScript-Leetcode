/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = (colors, neededTime) => {
    let totalTime = 0, currMaxTime = 0;

    for (let i = 0; i < colors.length; ++i) {
        if (i > 0 && colors[i] !== colors[i - 1]) {
            currMaxTime = 0;
        }
        totalTime += Math.min(currMaxTime, neededTime[i]);
        currMaxTime = Math.max(currMaxTime, neededTime[i]);
    }

    return totalTime;
};