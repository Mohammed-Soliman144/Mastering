/**
 * const idx = Math.abs(nums[i]) - 1 (v - 1 => which arr = [1 to n] => so each value = i + 1 and each i = value - 1) so here if value is negative make it positive then make it points to it relative index then check if already negating value ignored if(nums[idx] > 0) nums[idx] = -nums[idx] so negative indexes here means all values exist in array then second loop iteration then check if(nums[i] > 0) result.push(i + 1) means all values here is greater than zero (values that are not negating marker) which are values duplicated or disappeared added to result array
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbersByNegating = function(nums) {
    // Use Marking in place algorithm (negating Approach)
    // O(N): T O(1): S
    const n = nums.length
    const result = []


    for(let i = 0; i < n; i++){
        // get index of each value in array after make value positive
        const idx = Math.abs(nums[i]) - 1
        // check each value if already negative ignored otherwise negating it marked as exist
        if(nums[idx] > 0) nums[idx] = -nums[idx]
    }

    for(let i = 0; i < n; i++)
        // all positive values are values disappeared from array
        if(nums[i] > 0)
            result.push(i + 1)

    return result
};


var findDisappearedNumbersByModulo = function(nums) {
    const n = nums.length
    const result = []

    // make all existing indexes greater than n 
    for(let i = 0; i < n; i++) {
        // get index nums[i] - 1 = index
        const idx = (nums[i] - 1) % n
        nums[idx] += n
    }

    for(let i = 0; i < n; i++) {
        if(nums[i] <= n)
            result.push(i + 1)
    }

    return result
}

console.log(findDisappearedNumbersByNegating([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbersByNegating([1,1]))

console.log(findDisappearedNumbersByModulo([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbersByModulo([1,1]))