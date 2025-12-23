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
        result1[i] = nums1[i];
    }

    for (let j = 0; j < n; j++) {
        result2[j] = nums2[j]
    }

    let merge = [...result1, ...result2];
    let ans = merge.sort((a, b) => a - b);

    for(let k = 0;k<ans.length;k++){
        nums1[k] = ans[k]
    }

    return nums1

};