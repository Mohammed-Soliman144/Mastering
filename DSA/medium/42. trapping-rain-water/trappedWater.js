/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // use optimal solution two pointer algorithm O(N): T and O(1): S
    let 
        left = 0,
        right = height.length - 1,
        // problem guranateed height non-negative integer
        // so all height integer is greater than zero
        leftMax = 0, 
        rightMax = 0,
        trappedWater = 0 

    while(left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if(height[left] < height[right]) {
            trappedWater += leftMax - height[left]
            left++
        } else {
            trappedWater += rightMax - height[right]
            right--
        }
    }

    return trappedWater
};

/*
// Second Solution Not Optimal O(N): T - O(N): S
// index represent height and width equals 1 unit only
// Create linear datastructure array to store max height for each index inside height array (from left to right => forward)
// Create linear datastructure array to store to store max height for each index inside height array (from right to left => backward)
// now iterate on height array calculate trapped water by below formula
// trappedWater = Math.min(forwardMax[i], backwardMax[i]) - height[i]
// which compare each index (height) inside height array with minimum from forwardMax and backwardMax for the same height 
var trap = function(height) {
    const forwardMax = [], backwardMax = [], n = height.length - 1
    let trappedWater = 0

    forwardMax[0] = height[0]
    for(let i = 1; i < height.length; i++)
        forwardMax[i] = Math.max(forwardMax[i - 1], height[i])

    backwardMax[n] = height[n]
    for(let i = n - 1; i >= 0; i--)
        backwardMax[i] = Math.max(backwardMax[i + 1], height[i])

    for(let i = 0; i < height.length; i++)
        trappedWater += Math.min(forwardMax[i], backwardMax[i]) - height[i]

    return trappedWater
}
*/