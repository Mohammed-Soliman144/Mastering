/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Using Prefix and Suffix pass product Algorithm
    // O(N): T - O(1): S
    const n = nums.length
    // result of mulitplication which any number multiply by one return same number
    const result = new Array(n).fill(1)

    // Prefix Pass => Store product of all elements to the left of each current index
    for(let i = 0, left = 1; i < n; i++) {
        // Store Only
        result[i] = left
        left *= nums[i]
    }

    // Suffix Pass => multiply the stored left product by product of all elements to the right of each current index
    for(let i = n - 1, right = 1; i >= 0; i--) {
        // the stored left product by product of all elements to the right of each current index
        result[i] *= right
        right *= nums[i]
    }

    return result
};



console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))