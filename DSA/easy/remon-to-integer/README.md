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
 * @return {number}
 */
var romanToInt = function(s) {
    // O(N): T, O(1): S (extra space hashmap (object) does not grow with N of input size which is s contains 1000 chars with object enteries as the same and so on)
    const hashmap = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM':900,
        'M': 1000
    }
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        if(hashmap[s[i].concat(s[i+1])]) {
            sum += hashmap[s[i].concat(s[i+1])]
            // console.log(sum, i)
            i = i + 1
            continue;
        } else if (hashmap[s[i]]) {
            sum +=(hashmap[s[i]])
            // console.log(sum, i)
        }
    }
    return sum;
};

// Other Solution Optimize only hard coded for 6 subtractive special cases
// Note both solution is optimal with O(N): T and O(1): S
var romanToInt = function(s) {
    let sum = 0;
    const hashmap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(let i = 0; i < s.length; i++) {
        const curr = hashmap[s[i]]
        const next = hashmap[s[i + 1]] || 0 // i = s.length - 1 so i + 1 undefined

        if(curr < next) 
            sum -= curr
        else
            sum += curr
    }

    return sum
}
```