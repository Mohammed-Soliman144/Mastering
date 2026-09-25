/**
 * use XOR Bitwise operator to get unique number in array
 * XOR Bitwise operator if different bits return 1 and if the same bits return 0
 * O(1): S - O(N): T
 * @param {number []} nums 
 * @returns {number} single - unique number appear only once
 */
var singleNumber = function(nums) {
    let single = 0, i = 0
    while(i < nums.lenght) {
        single = single ^ nums[i]
        i++
    }
    return single
}