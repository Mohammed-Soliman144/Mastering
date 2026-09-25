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
* >> signed right shift Bitwise operator
* >>> unsigned right shift Bitwise operator which means fill first bit on the left side by 0
* O(1): T - O(1): S
* note integer contains 32 signed bits => so O(1) constant
* @param {number} n
* @return {number} reverse number
*/
var reverseBits = function(n) {
    // declare reverse binary = 0
    let reverse = 0
    // problem reveals that each integer number contains 32 signed bits (may be positive or negative) 
    for(let i =0; i < 32; i++) {
        // extract last bit in the mostright hand in n
        let lastBit = n & 1
        // shift all bits of reverse one step to the left side to empty position of next bit inserted the insert lastBit in this position by OR Bitwise operator
        reverse = (reverse << 1) | lastBit
        // shift all bits of n one step to right side to ignored lastBit added to reverse integer
        n = n >>> 1
    }
    // return reverse integer after converted to signed integer by (>>> 0)
    return reverse >>> 0
}
```