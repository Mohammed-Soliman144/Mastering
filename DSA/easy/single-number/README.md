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
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // XOR Bitwise Operator ^
    // if two bits are equals return 0 otherwise return 1
    let i = 0, single = 0;
    while(i < nums.length)
        single ^= nums[i++];
    return single;
};

```