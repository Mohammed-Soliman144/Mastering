# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- use two pointer technique
- 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Time O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- Space O(1)
# Code
```javascript []
/**
 * use two pointer techinque
 * left => points to first unique element, right => points to adjacent element next to left
 * loop through elements of nums in condition right < nums.length
 * if nums[left] === nums[right] => duplication (not uniqueness) so right++
 * if nums[left] !== nums[right] => uniqueness so in advance increment left pointer by one (which already points to last unique element) then nums[left] = nums[right] only copy not swap then right++
 * finally return count of unique elements = left + 1 (left starts from zero as index not counter) 
 * @param {number[]} nums
 * @return {number}
 */
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0, right = left + 1;
    while(right < nums.length) {
        if(nums[left] === nums[right])
            right++
        else {
            left++
            nums[left] = nums[right]
            right++
        }
    }
    return left + 1
};
```