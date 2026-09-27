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
 * use sorting with O(N Log N) - Two pointer algorithm (left and right) 
 * O(N**2): T - O(N): S because create relative triple array in worst case contains all numbers in nums
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Edge Case => at least array contain three numbers
    if(nums.length < 3) return []

    // Sorting array in ascending order to help moving two pointer on left or right side (which smaller number on left and bigger on right)
    nums.sort((a, b) => a - b)

    const triple = []

    // loop condition i < nums.length - 2 which i need two numbers beside the current number nums[i] at least in array 
    for(let i = 0; i < nums.length - 2; i++) {
        // break outer loop if current num > 0
        if(nums[i] > 0) break; 
        // eliminating duplicating numbers (skipped duplicated)
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        // make 3Sum as 2Sum algorithm compare target with sum
        // nums[i] + nums[left] + nums[right] = 0 => (3Sum)
        // nums[left] + nums[right] = -nums[i] => (2Sum)
        const target = nums[i] * -1
        let 
            left = i + 1,
            right = nums.length - 1
        while(left < right) {
            // sum = nums[left] + nums[right]
            const sum = nums[left] + nums[right]
            // 3 Scenarios here (with sum and target)
            if(sum === target) {
                // push triple numbers to triple array
                triple.push([nums[i], nums[left], nums[right]])
                // skipped duplicate in left pointers (increment left) 
                while(left < right && nums[left] === nums[left + 1])
                    left++
                // skipped duplicate in right pointers (decrement right)
                while(left < right && nums[right] === nums[right - 1])
                    right--
                left++
                right--
            } else if (sum < target) 
                left++
            else {
                right--
            }
        }
    }
    return triple
};
```