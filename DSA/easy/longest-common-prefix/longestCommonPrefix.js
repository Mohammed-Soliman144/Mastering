/**
 * use vertical scanning Approach to compare all strings in array at the same iteration (enhance time)
 * apply two nested loops which first one iterate on the first string in array and compare each letter with the same index letter in remain strings
 * second loop iterate on the all strings in array of strings strs and starts from index 1 adjacent the to first string (index 0)
 * compare currentCharacter in first string in each index (position) with the same index (position) of character in other strings if not matched return first string after slice from index 0 to index i (index of first mismatching character) and if index of character in first string is greater than second string length should be stop and return sliced of strs[0].slice(0, index of first mismatching character i)
 * if finish loop so that means the whole first string in array is as longest prefix
 * datastructure used for parameters is Array of strings and for returned value is string
 * Time Complexity  O(N * M) which m represent the length of shortest string
 * Space Complexity O(1) 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(!strs.length) return ""
    for(let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i]
        for(let j = 1; j < strs.length; j++)
            if(currentChar !== strs[j][i] || i >= strs[j])
                return strs[0].slice(0, i)
    }
    return strs[0]
}


class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // insertFirstNode
    insertFirst(val) {
        this.head = new Node(val, this.head)
        this.size++
    }
}