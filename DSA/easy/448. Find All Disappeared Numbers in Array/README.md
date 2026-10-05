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
 * use in-place marking algorithm with negate each index by -nums[val - 1]
 * Then check position are still positive so numbers disappeared is i + 1
 * O(N): T O(1): S (Optimal)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // Use in-place marking algorithm 
    const n = nums.length
    const result = []
    // Negating all position which each position val - 1 (because array is [1, n] and n is length)
    for(let i = 0; i < n; i++){
        const idx = Math.abs(nums[i]) - 1
        if(nums[idx] > 0) nums[idx] = -nums[idx]
    }

    // Check Positive position that stayed never marker which value doesnot appear equal index + 1
    for(let i = 0; i < n; i++)
        if(nums[i] > 0) 
            result.push(i + 1)

    return result
};
```