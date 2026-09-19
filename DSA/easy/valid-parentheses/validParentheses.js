/**
 * use Stack datastructure (LIFO) with array datatype
 * O(N): T - O(N): S
 * @param {string} s
 * @return {boolean} true if valid otherwise is false 
 */
var isValid = function (s) {
    const stack = []
    for(const char of s) {
        if(char === '(' || char === '[' || char === '{')
            stack.push(char)
        else {
            const prev = stack.pop()
            if(
                prev === '(' && char !== ')' ||
                prev === '{' && char !== '}' ||
                prev === '[' && char !== ']' ||
                prev === undefined
            ) return false
        }
    }
    return stack.length === 0
}