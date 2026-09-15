/**
 * use two pointer techinque
 * left => points to first unique element, right => points to adjacent element next to left
 * loop through elements of nums in condition right < nums.length
 * if nums[left] === nums[right] => duplication (not uniqueness) so right++
 * if nums[left] !== nums[right] => uniqueness so in advance increment left pointer by one (which already points to last unique element) then nums[left] = nums[right] only copy not swap then right++
 * finally return count of unique elements = left + 1 (left starts from zero as index not counter) 
 * @param {number[]} nums
 * @return {number}
 * */ 
var removeDuplicates = function (nums) {
    let left = 0, right = left + 1
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
}