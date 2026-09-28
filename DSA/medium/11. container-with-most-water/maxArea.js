/**
 * Use Two Pointer Algorithm (The Optimal)
 * O(N): T and O(1): S
 * @param {number []} height - array of height which value represent height and indexes represent width
 * @return {number} maxArea 
 */
var maxArea = function (height) {
    let 
        left = 0,
        right = height.length - 1,
        maxArea = 0

        while(left < right) {
            const width = right - left
            const minHeight = Math.min(height[left], height[right])
            const containerArea = width * minHeight
            if(containerArea > maxArea)
                maxArea = containerArea
            // move pointer based on where is minimum height so should be search if there is other than height less the current height or not if on the left so left++ if on the right so right--
            if(height[left] < height[right])
                left++
            // note regardless third scenario which is height[left] === height[right] if either left++ or right-- will reach the maxArea which we compare current maxArea with future one (no any effect)
            else
                right--
        }
    return maxArea
}