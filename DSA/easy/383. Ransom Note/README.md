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
 * Use Characters Frequency Counting with array algorithm (ascii chars)
 * O(N): T O(N): S
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Use Characters Frequency counting with array Algorithm
    if(ransomNote.length > magazine.length) return false
    
    // Array contains 26 english letters
    const count = new Array(26).fill(0) 
    // all characters are lowercase from 97 to 122
    const asciiA = 'a'.charCodeAt(0)

    // must magazine letters count is greater than or equal to ransomNote
    // increment count character for each letter base on index
    for(let i = 0; i < magazine.length; i++)
        // count[magazine[i].charCodeAt(0) - asciiA]++ 
        // count['b'.charCodeAt(0) - asciiA]++ 
        // count[98 - 97]++ => count[1]++ => count[1] = count[1] + 1 and count[1] = 0 
        count[magazine[i].charCodeAt(0) - asciiA]++

    // decrement count by letter count in ransomNote
    for(let i = 0; i < ransomNote.length; i++)
        if(--count[ransomNote[i].charCodeAt(0) - asciiA] < 0) return false
    
    // otherwise
    return true
};
```