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
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // using Binary Search algorithm O(1): S O(Log X): T
    let left = 0
    let right = x
    let res = 0

    while(left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        if(mid <= Math.floor(x / mid)) {
            res = mid
            left = mid + 1
        } else 
            right = mid - 1
    }

    return res
};
```