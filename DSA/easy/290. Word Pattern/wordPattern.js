/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // using bidirectional hashmap algorithm 
    const words = s.split(' ')
    if(words.length !== pattern.length) return false

    const hashPattern = new Map()
    const hashWords = new Map()

    for(let i = 0; i < words.length; i++) {
        if(!hashPattern.has(pattern[i]) && !hashWords.has(words[i])) {
            hashPattern.set(pattern[i], words[i])
            hashWords.set(words[i], pattern[i])
        }
        if(hashPattern.get(pattern[i]) !== words[i] || hashWords.get(words[i]) !== pattern[i])
            return false
    }

    return true
};