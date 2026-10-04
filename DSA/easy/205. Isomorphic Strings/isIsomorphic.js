/**
 * Isomorphic (Tech Term) => is two strings can replace one by other and vice verse is correct (in other words can say is bidirectional hashmap)
 * Bidirectional Hashmaps is two hashmap which each one points to (mapping) to another one
    hashmapT {keyT1 => valS1, keyT2 => valS2, keyT3 => valS3, etc....}
    hashmapS {KeyS1 => valT1, KeyS3 => valT3, KeyS3 => valT3, etc....}
    so can say if reversing hashmap1 will get hashmap2 (vice verse correct)
    -- this pattern of datastructure is useful in web development when connect between database (backend) => API => Frontend
    UsersDB                  UsersObj              
    user_ID     mapping to    userId
    Examples of isomorphic:
    "abc" and "sec" (isIsomorphic => true) 
        hash1 {a => s, b => e, c => c}
        hash2 {s => a, e => b, c => c}
    "aab" and "ggd" (isIsomorphic => true) 
        hash1 {a => g, b => d}
        hash2 {g => a, d => b}
    "aab" and "ged" (isIsomorphic => false) 
        which a mapping to different characters a => g and a => e (wrong) 
        hash1 {a => e, b => d} // here when hash.set will override previous value from g to become a
        hash2 {g => a, e => a, d => b}
    "aabb" and "abab" (isIsomorphic => false) 
        which a mapping to different characters a => a and a => b (wrong) 
        hash1 {a => b, b => b} 
    -- must two string are equal length to be valid Isomorphic
 * in this problem must use Bidirectional hashmap Algorithm (two hashmaps)
 * O(N): T - O(N): S
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // use bidirectional hashmap algorithm
    // if not equal length is not isomorphic
    if(s.length !== t.length) return false
    const hashmapS = new Map()
    const hashmapT = new Map()

    for(let i = 0; i < s.length; i++) {
        if(!hashmapS.has(s[i]) && !hashmapT.has(t[i])) {
            hashmapS.set(s[i], t[i])
            hashmapT.set(t[i], s[i])
        }  
        if(hashmapS.get(s[i]) !== t[i] || hashmapT.get(t[i]) !== s[i])
            return false
    }

    // otherwise isIsomorphic
    return true
};