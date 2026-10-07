/**
 * using Kadane Algorithm to get Maximum or Minimum Subarray (optimal)
 * SubArray => means a continuous part of array (respective indexes of original array)
 * const arr = ['a', 'b', 'c', 'd'];
 * const arr1 = ['b', 'c'] => SubArray which is a continuous part of array (1, 2)
 * const arr2 = ['a', 'd'] => not SubArray
 * currSum => is the maximum subarray sum ending at the current position
 * bestSum => is the maximum sum of any subarray at any position
 * Kadane Algorithm => scan the whole array once and keeping currSum at the ending position and discard all previous sum whenever it carrying forward is worse than starting fresh
 * O(N): T - O(1): S
 * @param {number []} nums
 * @returns {number} 
 */

var maximumSubArray = function (nums) {
    let currSum = nums[0]
    let bestSum = nums[0]
    let current = 0, start = 0, end = 0
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > currSum + nums[i]) {
            currSum = nums[i]
            current = i
        } else {
            currSum += nums[i]
        }

        if(currSum > bestSum) {
            bestSum = currSum
            start = current
            end = i
        }
    }
    // remove end part at first
    nums.splice(end + 1, nums.length - 1 - end)
    // remove start part
    nums.splice(0, start)
    // using splice modify in place keep time O(N): T and O(1): S
    console.log(nums)

    return bestSum
}


var maximuSubArrayByBruteForce = function (nums) {
    // Brute Force O(N**2): T O(1): S
    let bestSum = nums[0]
    for(let i = 0; i < nums.length; i++) {
        let currSum = 0
        for(let j = i; j < nums.length; j++) {
            currSum += nums[j]
            bestSum = Math.max(bestSum, currSum)
        }
    }
    return bestSum
}




console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maximumSubArray([1]))
console.log(maximumSubArray([5,4,-1,7,8]))

console.log(maximuSubArrayByBruteForce([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maximuSubArrayByBruteForce([1]))
console.log(maximuSubArrayByBruteForce([5,4,-1,7,8]))