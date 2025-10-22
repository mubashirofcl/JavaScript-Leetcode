/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let count = 0;
    for(let x of nums){
        if(x % 6 === 0){ 
            sum += x;
            count++;
        }
    }
    return count === 0 ? 0 : Math.floor(sum / count); 
};