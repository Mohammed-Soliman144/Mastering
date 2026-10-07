# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * using Kadane Algorithm
 * Optimal O(N): T O(1):S
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // using Kadane Algorithm 
    // Scan the whole array once and keeping best sum at ending position and discard all previous sum whatever it which is worse than starting fresh

    let currSum = nums[0]
    let bestSum = nums[0]
     
    for(let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i])
        bestSum = Math.max(bestSum, currSum)
    }

    return bestSum
};
```