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
 * @param {number} target
 * @return {number[]}
 */
// Input: nums = [3,2,4], target = 6
var twoSum  = function(nums, target) {
    // if(!Array.isArray(nums) || typeof target !== "number") return;
    // // length (check) then => sum any two numbers based on index === target
    // let output = [];
    // for(let i = 0,y = 0; i < nums.length; i++) {
    //     //  6 === 6
    //     for(let x = i+1; x < nums.length; x++) {
    //         if(nums[i] + nums[x] === target) {
    //             output[y++] = i;
    //             output[y++] = x;
    //         }
    //     }
    // }
    // return output;
    /************ */
    // Two Pointer Technique
    // O(N): T instead of O(N * N): T
    // O(1): S instead of O(N): S
    // let index = 0, slow, fast;
    // while(index < nums.length) {
    //     slow = index
    //     fast = index + 1
    //     if(nums[slow] + nums[fast] === target)
    //         return [slow, fast]
    //     index++
    // }
    /****** */
    // O(2N): T
    // O(1): S
    // note starts with adjacent elements indexes which is first scenario may be faced
    // let left = 0, right = nums.length - 1;
    // let i = 0, slow, fast;
    // while(i < nums.length) {
    //     slow = i
    //     fast = i + 1
    //     if(nums[slow] + nums[fast] === target)
    //         return [slow, fast]
    //     i++
    // } 
    // // note end with non adjacent elements indexes which is second scenario may be faced
    // while(left <= right) {
    //     console.log(left, right)
    //     if(nums[left] + nums[right] === target)
    //         return [left, right]
    //     left++
    //     right--
    // }
    /*************** */
    // Optimal Solution
    // O(N): T, O(N): S
    // using hashmap => map
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}

```