/**
 * use hashmap/frequency count approach algorithm (optimal)
 * O(N): T - O(N):S
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hashmap = new Map()

    for(const char of s)
        hashmap.set(char, (hashmap.get(char) || 0) + 1)

    for(let i = 0; i < s.length; i++)
        if(hashmap.get(s[i]) === 1) return i
        
    return -1
};