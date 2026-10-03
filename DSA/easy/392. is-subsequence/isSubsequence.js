/**
 * Use Two pointer algorithm (Optimal)
 * 1- Two Pointers when moving from the same starting index enforces the subsequence always follow index-order of original string
 * 2- Two Pointers can control equality values of characters for subsequence string.
 * 3- Subsequence means a string with length less than or equal original string and has the same character of original one with different positions but must ordering of index for characters in subsequence be the same as the original one
    ace is subsequence of abcde (true)
    aec is not subsequence of abcde (false - which index e comes after index c in original one but not respect this in subsequence)
    abcde is subsequence of abcde (true)
    acx is not subsequence of abcde (false - which x does not contains in characters of original one)
 * O(T): T => which T is minimum length of subsequence in worst case secanario equal length of origin and time will be O(N):T
 * O(1): S
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    /**
        p1      s[p1] === t[p2] increment both by one       
        a   e   c
        p2
        a   b   c   d  e
        
            p1     s[p1] !== t[p2] increment only p2 by one        
        a   e   c
            p2
        a   b   c   d  e

            p1        s[p1] !== t[p2] increment only p2 by one      
        a   e   c
                p2
        a   b   c   d  e

            p1        s[p1] !== t[p2] increment only p2 by one      
        a   e   c
                    p2
        a   b   c   d  e

            p1        s[p1] === t[p2] increment both by one      
        a   e   c
                       p2
        a   b   c   d  e
   
                p1   exit loop => p1 < s.length && p2 < t.length (false)
        a   e   c
                           p2
        a   b   c   d  e   undefined

        return p1 === s.length   => 2 !== 3 false
     */

    let ptr1 = 0, ptr2 = 0
    // Stopped only if ptr1 or ptr2 exceed its length respectively
    while(ptr1 < s.length && ptr2 < t.length) {
        if(s[ptr1] === t[ptr2]){
            ptr1++
            ptr2++
        } else 
            ptr2++
    }
    // if ptr1 is not equal s.length means index of character in t does not the same index character in s or t length is small than s length
    return ptr1 === s.length
};