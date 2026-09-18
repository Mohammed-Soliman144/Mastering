# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N): T
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N): S
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {Array} nums - Array of integers 
 * @returns boolean - true if contains duplicate otherwise false
 */
var containsDuplicate = function (nums) {
    // Edge Cases
    // if empty array or if array only contains one element
    if(nums.length === 1 || nums.length === 0) return false
    // Best Optimal Solution is use Set Datastructure
    // May be use Set or Map or Object to check if seen the element before within array and keep the same Time and Space complexity but Set is Specialized datastructure to store uniqueness values by default
    // O(N): T - O(N): S
    const seen = new Set()
    for(const num of nums) {
        if(seen.has(num))
            return true
        seen.add(num)
    }
    return false
}
```