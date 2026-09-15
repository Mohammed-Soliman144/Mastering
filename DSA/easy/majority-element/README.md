# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

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
 * using Boyer-Moore Voting algorithms which is best choice to get the majority element
 * this algorithms works correcty under direct constraint which is in all cases majority element exist inside elements of array
 * majority element >= n / 2 which n is array length or in other words the element with frequency (repeated) inside array more than 50% of the remain other elements
 * Boyer Moore Voting algorithms guarantee in all cases time complexity will be O(N) which n represented number of elements and space complexity will be always O(1) which means regardless the number of element will be only one memory space for majority element not as hashmap (like map or object)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // candidate represent the element appears inside array more than 50% of total array length (majority)
    // count is the validation rule or elimanation rule that elimanate the majority element but within the whole array element 
   let candidate = null, count = 0
    // iterate through entire elements of nums
   for(let i = 0; i < nums.length; i++) {
        // suppose is first element is majority when no any element matched elimanation rule
        if(count === 0)
            candidate = nums[i]
        // if element exist inside array increment matched by one otherwise decrement by one
        if(candidate === nums[i])
            count++
        else 
            count--
   }
   return candidate
};
```