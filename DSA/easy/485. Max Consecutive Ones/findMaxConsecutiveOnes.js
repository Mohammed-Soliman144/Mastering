/**
 * Use single-pass consecutive run counting Algorithm
 * O(N): T O(1):S
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let lastCount = 0, counter = 0, i = 0;
    while(i < nums.length) {
        if(nums[i] === 1) {
            lastCount++
            counter = Math.max(counter, lastCount)
        } else
            lastCount = 0
        i++
    }

    return counter
};