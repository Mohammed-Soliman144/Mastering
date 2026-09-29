/**
 * using sliding window algorithm (with two pointer left&right)
 * O(N): T - O(N): S => extra auxiliary space for hashset (set)
 * @param {string} s
 * @return {number} longest length of substring without duplicate characters 
 */
var longestLength = function(s) {
    const seen = new Set()
    let left = 0, maxLength = 0
    for(let right = 0; right < s.length; right++) {
        // shrink sliding window until the duplicate character is removed
        while(seen.has(s[right])) {
            seen.delete(s[left])
            left++
        }
        seen.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}

var longestLength = function(s) {
    const seen = new Map()
    let left = 0, maxLength = 0

    for(let right = 0; right < s.length; right++) {
        if(seen.has(s[right]) && seen.get(s[right]) >= left) {
            left = seen.get(s[right]) + 1
            seen.delete(s[right])
        }
        seen.set(s[right], right)
        right++
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}