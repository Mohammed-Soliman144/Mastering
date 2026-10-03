/**
 * Use Two Pointer Algorithm - O(N): T - O(1): S
 * Track index of values does not equal zero
 * copy current value does not equal zero to lastNonZeroIdx
 * then increment lastNonZeroIdx
 * at last loop of nums from lastNonZeroIdx and replace them by zero
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNonZeroIdx = 0
    for(let i = 0; i < nums.length; i++)
        if(nums[i] !== 0) {
            nums[lastNonZeroIdx] = nums[i]
            lastNonZeroIdx++
        }

    while(lastNonZeroIdx < nums.length)
        nums[lastNonZeroIdx++] = 0

    return
};