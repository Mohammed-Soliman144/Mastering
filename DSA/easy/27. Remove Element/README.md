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
 * Use Two Pointer Algorithm (Optimal)
 * O(N): T - O(1): S
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 const remove = (nums, val) => {
    /**   let lastNonTargetIdx = 0 (idx)
          let  i = 0  
     */
     let  
        lastNonTargetIdx = 0,
        i = 0

    while (i < nums.length) {
        if(nums[i] !== val) {
            nums[lastNonTargetIdx] = nums[i]
            lastNonTargetIdx++
        }
        i++
    }
    return [lastNonTargetIdx, nums]
 }

var removeElement = function(nums, val) {
    const [a, b] = remove(nums, val)
    return a
};
```