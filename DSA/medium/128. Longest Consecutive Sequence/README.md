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
```