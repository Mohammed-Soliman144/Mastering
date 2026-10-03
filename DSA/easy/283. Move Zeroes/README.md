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
 * Use Two Pointer Algorithm - O(N): T - O(1): S
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
```