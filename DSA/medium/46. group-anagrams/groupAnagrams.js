/**
 * Anagram => is the same letters and same repetation of letters in two string or two things (objects in general)
 * There are Two algorithms to solve this problem:
 * 1- using Hashmap and counting frequency of each letter (Optimal) O(N): S - O(N * K): T which k the maximum length of each string (word) and always does not exceed 26 letters O(26) => O(1):T so actually O(N):T
 * 2- using Hashmap and canonical represention (sorting each letter in a string)
 * @param {string[]} strs
 * @return {string[][]}
 */
//  First Solution Optimal => Using Hashmap with counting each character in a string
var groupAnagrams = function(strs) {
    // Edge Cases
    if(strs.length < 2) return [strs]
    const hash = {}
    for(const word of strs) {
        // each word only contains 26 letter each word as array of 26 letter
        const frequency = Array(26).fill(0)
        for(const char of word) {
            // Ascii code for lower letters a - z => 97 : 122
            const index = char.charCodeAt(0) - 97
            frequency[index]++
        }
        // make unique key based on 
        const key = frequency.join('#')

        if(!hash[key])
            hash[key] = [word]
        else
            hash[key].push(word)
    }
    return Object.values(hash)
};

// Second Solution => using Hashmap with sorting each string (word)
// O(N): S (as the same) - O(N * N(Log N)): T which sort() time complexity is O(N Log N): T
// sort() use javascript syntax for numeric values (with comparator => number compare with other number) use array.sort((a,b) => a - b) ascending order => [2, 6, 4].sort((a,b) => a - b) => [2, 4, 6]
// sort() for alphabitically characters use without javascript syntax (without comparator) so array.sort() only => [a, z, h, b].sort() => [a, b, h, z]
var groupAnagrams = function (strs) {
    const hash = {}
    const sortedStr = strs.map(word => word.split('').sort().join(''))

    for(let i = 0; i < strs.length; i++) {
        if(!hash[sortedStr[i]])
            hash[sortedStr[i]] = [strs[i]]
        else 
            hash[sortedStr[i]].push(strs[i])
    }

    return Object.values(hash)
}

