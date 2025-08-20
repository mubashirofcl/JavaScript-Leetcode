/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let customer of accounts) {
        let wealth = customer.reduce((a, b) => a + b, 0);

        maxWealth = Math.max(maxWealth, wealth);
    }

    return maxWealth;
};

console.log(maximumWealth([[1,2,3],[3,2,1]])); 