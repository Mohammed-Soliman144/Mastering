/**
 * Consecutive sequence is subarray of elements which keep difference between first element at index 0 and next element with difference 1 (according to this problem) [1, 2, 3] consecutive but [2, 4, 6] not consecutive (based on problem) 
 * using hashset algorithm to match O(N): T
 * Optimal O(N): T and O(N): S
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let maxLength = 0
    for(const num of set) {
        if(set.has(num - 1))
            continue
        let currNum = num
        let currMax = 1
        while(set.has(currNum + 1)) {
            currNum++
            currMax++
        } 
        maxLength = Math.max(maxLength, currMax)
    }
    return maxLength
};