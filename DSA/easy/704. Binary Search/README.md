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
 * Use Binary Search Algorithm (depends on two pointers left&right)
 * Binary Search is search algorithm inside sorted collection of elements which comparing target with the middle element in each iteration is eliminating the half remaining elements in space search.
 * O(log N): T - O(1): S
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let 
        left = 0,
        right = nums.length -1

    // must be left pointer matches right pointer to catch middle element
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if(nums[mid] === target)
            return mid
        // eliminating the middle element and all elements on left to its
        else if (nums[mid] < target)
            left = mid + 1
        // eliminating the middle element and all elements on right to its
        else 
            right = mid - 1
    }
    return -1
};
```