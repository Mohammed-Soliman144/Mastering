/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const markedArr = Array.from({length: nums.length}, _ => 0)

    for(let i = 0; i < nums.length; i++) {
        markedArr[nums[i] - 1]++
    }
    
    const duplicated = []
    for(let i = 0; i < markedArr.length; i++)
        if(markedArr[i] > 1)
            duplicated.push(i + 1)
    return duplicated
};