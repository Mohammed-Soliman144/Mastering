/**
 * use Hashmap datastructure by using Map 
 * O(N): T and O(N): S
 * @param {Array} nums - Array of integers
 * @param {number} target - target sum 
 * @return {Array} represent respectively indices in the original array 
 */
var twoSum = function (nums, target) {
    // The Optimal Solution
    // use hashmap datastructure which is Map
    // O(N): T and O(N): S
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(map.has(complement)) {
            // map.get(complement) is old indice (index) which must be stored in map in previous iterations and must be set first
            // i is current indice (index) in current iteration and must be second
            // return [oldComplement, currentIndex(new)]
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}