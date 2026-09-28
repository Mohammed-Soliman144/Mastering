/**
 * Use XOR Bitwise Operator to get the difference element appears once in array
 * which XOR 
 * 1010 (binary) => 10 (decimal)
 * 0111 (binary) => 7 (decimal)
 * =====
 * 1101 (binary) => 13 (decimal)
 * 0 ^ 0 => 0 || 1 ^ 1 => 0
 * 1 ^ 0 => 1 || 0 ^ 1 => 1
 * different bits so XOR = 1
 * same bits so XOR = 0
 * @param {number []} nums
 * @return {number} return single number that only appear once in array 
 */
var singleNumber = function(nums) {
    let i = 0, single = 0;
    while(i < nums.length)
        single ^= nums[i]
    return single
}