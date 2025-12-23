/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let result1 = [];
    let result2 = [];


    for (let i = 0; i < m; i++) {
        result1[i] = nums1[i]
    }
    for (let j = 0; j < n; j++) {
        result2[j] = nums2[j]
    }

    let ans = [...result1,...result2]
    let res = ans.sort((a,b)=> a-b)
    for(let k = 0;k<res.length;k++){
        nums1[k] = res[k]
    }

    return  nums1

};