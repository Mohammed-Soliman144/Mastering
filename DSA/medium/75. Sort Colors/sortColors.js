/**
 * use Dutch National Flag algorithm (use three way partitioning algorithm) which technically use 3 pointers
    - uses of dutch national flag algorithm: 
        1- less than pivot-pivot | equal to pivot-value | greater than pivot-value
        2- negative-pivot |  zero-pivot | positive-pivot
        3- so this problem sort colors actually colors has three way partitioning  0-red-pivot | 1-white-pivot | 2-blue-pivot (so Dutch national flag)
    - Dutch National Flag:
        => 0-index -------> left (confirm 0s - first partition)
        => left ----------> curr (confirm 1s - second partition)
        => curr ----------> right (unknown - processed values)
        => right ---------> n-1 (confirm 2s - thid partition)
 * Optimal O(N): T - O(1): S
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // Use Dutch National Flag Algorithm (Three ways partitioning) 
    let left = 0  
    let curr = 0 // processed pointer
    let right = nums.length - 1

    while(curr <= right) {
        // First Partition (0 ----> left (should nums[curr] = 0s))
        if(nums[curr] === 0) {
            [nums[left], nums[curr]] = [nums[curr], nums[left]]
            left++
            curr++
        } 
        // Second Partition (left -----> curr (should nums[curr] = 1))
        else if(nums[curr] === 1) {
            // skipped and increment curr++
            // which value 1s already in the correct index
            curr++
        } 
        //  Third Partition (right ----> n - 1) (should be nums[curr] = 2)
        else {
            [nums[curr], nums[right]] = [nums[right], nums[curr]]
            right--
        }
    }
};
