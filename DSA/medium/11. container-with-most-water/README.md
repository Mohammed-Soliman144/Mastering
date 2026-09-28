# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    /******** Brute Force Solution O(N**2): T - O(1): S ********** */
    // let left = 0, right = height.length - 1
    // let maxArea = -Infinity
    // while(left < height.length && right !== left) {
    //     let shorterHeight = Math.min(height[left], height[right])
    //     let distance = Math.abs(left - right)
    //     let maxWidth = distance * shorterHeight 
    //     if(maxWidth > maxArea)
    //         maxArea = maxWidth
    //     right--
    //     if(right === left) {
    //         left++
    //         right = height.length - 1
    //     }
    // }
    // return maxArea
    /************************************* */
    // Optimal Solution with using two pointers technique
    // O(N): T and O(1): S
    let 
        left = 0, 
        right = height.length - 1, 
        // there is no area of container less than or equal zero
        // zero (no area of container)
        maxArea = 0; 
    while(left < right) {
        const width = right - left; // always be positive
        const minHeight = Math.min(height[left], height[right])
        const containerArea = width * minHeight
        if(containerArea > maxArea)
            maxArea = containerArea
        // move pointer based on where is minimum height so should be search if there is other than height less the current height or not if on the left so left++ if on the right so right--
        if(height[left] < height[right])
            left++
        // note regardles third scenario which is height[left] === height[right] if either left++ or right-- will reach the maxArea which we compare current maxArea with future one (no any effect)
        else
            right--
    }
    return maxArea
};
```