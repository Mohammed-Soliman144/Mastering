/**
 * use sorting algorithm with O(N Log N): T - two pointers algorithm (left & right)
 * O(N**2): T - O(N): S which in the worst case scenario the triple array will contains all numbers inside nums array
 * @param {number []} nums - array of integers
 * @return {number [][]} triple - array of arrays integers
 */
var threeSum = function (nums) {
    // sorting nums array to help in moving two pointers (which smaller number on left side and bigger on right side)
    nums.sort((a, b) => a - b)
    
    // another empty array to store outputs
    const triple = []

    // Loop Condition => i < nums.length - 2 (always i need three element in array nums[i], nums[left], nums[right]) so i need two position existing in array beside current position i
    for(let i = 0; i < nums.lenght - 2; i++){
        // break outer loop and inner if nums[i] > 0 whatever two element must sum is greater than 0
        if(i > 0 && nums[i] > 0) 
            break
        // eliminating duplicate in i pointer (skipped)
        if(i > 0 && nums[i] === nums[i - 1])
            continue
        // make 3sum as 2sum (which compare target with sum)
        // nums[i] + nums[left] + nums[right] = 0
        // nums[left] + nums[right] = -nums[i] (fine as the same)
        let target = nums[i] * -1
        let 
            left = i + 1,
            right = nums.length - 1
        while(left < right) {
            const sum = nums[left] + nums[right]
            if(sum === target) {
                triple.push([nums[i], nums[left], nums[right]])
                // skipped duplication in left pointer (increment left pointer)
                while(left < right && nums[left] === nums[left + 1]) left++
                // skipped duplication in right pointer (decrement right pointer)
                while(left < right && nums[right] === nums[right - 1]) right--
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
}