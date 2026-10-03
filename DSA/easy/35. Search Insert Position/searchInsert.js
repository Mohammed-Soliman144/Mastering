/**
 * Use Binary search Algorithm (with two pointers left&right)
 * O(Log N): T - O(1): S
 * Invariant rule:
 * left pointer will be point to insertion index if target not found (left = middle index + 1 || nums.length)
 * right pointer will be point to previous index before insertion index if target not found (right = middle index - 1 || nums.length - 1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let 
        left = 0,
        right = nums.length - 1
        mid = 0;
    while( left <= right) {
        mid = left + Math.floor((right - left) / 2)
        // if exist return its index
        if(nums[mid] === target)
            return mid
        // otherwise not found return left (index of insertion order)
        else if(nums[mid] > target)
            right = mid - 1
        else
            left = mid + 1
    }
    // otherwise not found return left (index of insertion order)
    return left
};