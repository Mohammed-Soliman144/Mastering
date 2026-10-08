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
 * Using Two Pointers Algorithm
 * O(N): T - O(1):S
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1

    while(left < right) {
        const sum = numbers[left] + numbers[right]
        
        // problem guaranteed only exactly one solution within array (return)
        // 1-indexed array which first index is 1 not 0 (left + 1, right + 1)
        if(sum === target)
            return [left + 1, right + 1] 
        // array sorted in non-decreasing order (ascending)
        if(sum > target)
            right--
        else
            left++
    }
};
```