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
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // To only keep tracking checking parenthesis and processed ordering of parenthesis automated must use stack that directly followed LIFO
    const stack = []
    for(const char of s) {
        // stored all openning parenthesis in a array (stack)
        if(char === '(' || char === '[' || char === '{')
            stack.push(char)
        // check all remaining characters which must be closing parenthesis
        else {
            // pop() method return last deleted from element (delete from right)
            // pop() if return undefined so array is empty
            const prevChar = stack.pop()
            // compare currentChar (must be closing parenthesis) with prevChar
            if(
                prevChar === '(' && char !== ')' || 
                prevChar === '[' && char !== ']' ||
                prevChar === '{' && char !== '}' ||
                prevChar === undefined
            )
            return false
        }
    }

    // after finishing above loop must be removing all openning parenthesis in array (that already stored in it) and must be length === 0 so is valid true otherwise return false
    return stack.length === 0 
};
```