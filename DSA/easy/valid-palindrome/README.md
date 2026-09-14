# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- filteration string from all non alphanumeric characters
- change all upper character to lower
- check is string is palindrome
  
# Approach
<!-- Describe your approach to solving the problem. -->
- using ASCII Code pattern save time and space complexity
- using replace() and toLowerCase() are immutable string methods which means brand new string in memory in a heap (more space)
- use two pointer technique to save time 

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
var isPalindrome = function(s) {
    /**
    * Check is character is alphanumeric or not by using ASCII Code
    * numeric chars 0 => 48 to 9 => 57
    * upper alpha chars A => 65 to Z = 90
    * lower alpha chars a => 97 to z = 122
    */
    const isAlphanumeric = (charCode) => {
        return (charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
    }

    let left = 0, right = s.length - 1;
    while(left < right) {
        // Get ASCII Code of each char by charCodeAt(index)
        const leftCode = s.charCodeAt(left)
        const rightCode = s.charCodeAt(right)
        // Check if char is not alphanumeric so skipped instead of removing takes more space
        if(!isAlphanumeric(leftCode)) {
            left++
            continue
        }
        if(!isAlphanumeric(rightCode)) {
            right--
            continue
        }
        // Change any char from upper to lower by using ASCII code (convertion in place) instead of using toLowerCase which is immutable method which means change in new string not the same string (called brand new string) which leads to more space and complexity
        const leftLowerCode = leftCode >= 65 && leftCode <= 90 ? leftCode + 32 : leftCode
        const rightLowerCode = rightCode >= 65 && rightCode <= 90 ? rightCode + 32 : rightCode

        if(leftLowerCode !== rightLowerCode)
            return false
        else {
            left++
            right--
        }
    }
    return true
};
```