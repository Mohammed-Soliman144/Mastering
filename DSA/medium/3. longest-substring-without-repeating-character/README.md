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
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // O(N**2): T - O(N): S
    // const hashSet = new Set()
    // let longestLength = 0
    // for(let left = 0; left < s.length; left++) {
    //     let subStr = ""
    //     let right = left; 
    //     while(right < s.length)
    //         if(!hashSet.has(s[right])) {
    //             hashSet.add(s[right])
    //             subStr += s[right]
    //             right++
    //             if(subStr.length > longestLength)
    //                 longestLength = subStr.length
    //         } else {
    //             hashSet.clear()
    //             break;
    //         }     
    // }
    // return longestLength
    /*****  */
    // Sliding Window ALgorithm (with two pointers) 
    // O(N): T - O(N): S
    const seen = new Set()
    let left = 0, maxLength = 0;
    for(let right = 0; right < s.length; right++) {
        // simulate slicing of sliding window which means shrinking window from left until duplicate is removed
        while(seen.has(s[right])) {
            seen.delete(s[left])
            left++
        }
        seen.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
};
```