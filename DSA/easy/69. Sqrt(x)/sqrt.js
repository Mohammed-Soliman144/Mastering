/**
 * @param {number} x
 * @returns {number} result as square root for x
 */
var sqrt = function(x) {
    // using Binary Search Algorithm O(1): S O(Log x):T
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
}