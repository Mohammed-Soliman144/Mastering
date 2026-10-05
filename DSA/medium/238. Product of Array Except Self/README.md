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
 * Use Prefix and Suffix Product ALgorithm 
 * Optimal => O(N): T O(1): S
 * Prefix Pass => store product of all elements to the left of each current index
 * Suffix Pass => multiply the stored left product by product of all elements to the right of each index
 * product => is the result of multiplication and multiply => is multiply of each operation
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Use Prefix and Suffix Product ALgorithm
    const n = nums.length
    // fill by one which each number multiply by one return number
    const result = new Array(n).fill(1)

    // Prefix Pass => Store product of all elements to the left of each current index
    for(let i = 0, left = 1; i < n; i++) {
        // store only which result[i] = 1
        result[i] = left
        left *= nums[i]
    }


    // Suffix Pass => multiply the stored left product by product of all elements to the right of each current index
    for(let i = n - 1, right = 1; i >= 0; i--) {
        // result[i] = the stored left product 
        result[i] *= right
        right *= nums[i]
    }

    return result
};
```