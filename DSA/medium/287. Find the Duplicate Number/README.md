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
var findDuplicate = function(nums) {
    // using floyd algorithm (or tortoise and hare algorithm) with O(N):T and O(1): S 
    // Phase 1 => find the meeting point of the cycle
    // slow move one step
    let slow = nums[0]
    // fast move two steps
    let fast = nums[nums[0]]

    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while(slow !== fast)
    
    // Phase 2 => find the begining of cycle 
    slow = 0
    while(slow !== fast) {
        // slow and fast move one step
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
};
```