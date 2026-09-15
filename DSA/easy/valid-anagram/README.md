# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Time => O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- Space => O(1)

# Code
```javascript []
/**
 * use key-value pairs (js objects - hashmap)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Edge case
    if(s.length !== t.length)
        return false
    
    // create new object to store data in key-value pairs (use hashmap)
    const anagram = {}

    // fill object by all character in any string and number of occurences as its value
    for(const char of s) 
        if(anagram[char] !== undefined)
            anagram[char]++
        else
            anagram[char] = 1
    
    // check another string is anagram by decrement duplicated characters by one and otherwise return false
    for(const char of t)
        if(anagram[char])
            anagram[char]--
        else 
            return false
    // if finish loop so its anagram return true
    return true
};
```