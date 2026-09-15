/**
 * anagram => same number of occurences + same character
 * @param {string} s
 * @param {string} t
 * @return {boolean} true if anagram otherwise return false
 */

var isAnagram = function (s, t) {
    // Edge Case
    if(s.length !== t.length)
        return false
    // create new object to store data in key-value pairs (object - hashmap)
    const anagram = {}

    // fill all number of occurences of any string inside object\
    for(const char of s) 
        if(anagram[char] !== undefined)
            anagram[char]++
        else 
            anagram[char] = 1
    
    // Check other string is anagram by decrement number of occurences by one when find any duplication otherwise return false
    for(const char of t)
        if(anagram[char])
            anagram[char]--
        else
            return false
    // if finish loop so both strings are anagrams
    return true
}