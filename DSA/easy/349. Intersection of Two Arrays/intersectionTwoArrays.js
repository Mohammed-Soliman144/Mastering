/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectionByHashset = function(nums1, nums2) {
    // Using Hashset algorithm O(N): T O(N): S (Optimal Elegent)
    const set = new Set(nums1)
    const result = []

    for(const val of nums2)
        // if delet value from set return true === means is already exist before delete in set => so should added to result
        if(set.delete(val))
            result.push(val)
    
    return result
};


var intersectionByFixedSizeArray = function(nums1, nums2) {
    // Constraint of problem
    // 1 <= nums1.length, nums2.length <= 1000
    // Optimal Based on Problem Constraints O(N): T O(1): S (technically O(N): S)
    const seen = new Array(1001).fill(false)
    const result = []

    for(const val of nums1)
        seen[val] = true

    for(const val of nums2)
        if(seen[val]) {
            result.push(val)
            // to ignore the same index of duplicate value that already added to result 
            // intersection array must by unique
            seen[val] = false
        }

    return result
}

/* 
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]

*/

console.log(intersectionByHashset([1,2,2,1], [2,2]))
console.log(intersectionByHashset([4,9,5], [9,4,9,8,4]))

console.log(intersectionByFixedSizeArray([1,2,2,1], [2,2]))
console.log(intersectionByFixedSizeArray([4,9,5], [9,4,9,8,4]))