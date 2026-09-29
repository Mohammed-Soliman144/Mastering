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
 * Using Sliding window algorithm (two pointers)
 * O(s + t): T - O(N): S (optimal)
 * expanding => move right (right++) and shrinking => move left (left++)
 * Longest sliding window => if window valid => expanding (move right) => if window invalid shrinking (move left) => repeat again
 * minimum sliding window => if window valid => shrinking (move left) => if window invalid expanding (move right) => repeat again
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // Edge Case 
    if(t.length > s.length) return ""

    // using hashmap with map to tracking window and target string
    const need = new Map()
    // add characters to need map
    // map {key (char) => value (counter)}
    for(const char of t)
        need.set(char, (need.get(char) || 0) + 1)
    // number of character required in window
    let required = need.size

    // map to tracking window
    const window = new Map()

    let 
        // left pointer tracking first char in window
        left = 0, 
        // minLeft pointer tracking first char in minimumWindow
        minLeft = 0, 
        // tracking the minimum length of window
        minLength = Infinity, 
        // number of window characters that matched target string
        matched = 0;

    // expanding window and move right
    for(let right = 0; right < s.length; right++) {
        const rightChar = s[right]
        // add rightChar to window
        window.set(rightChar, (window.get(rightChar) || 0) + 1)
        // increment matched window characters
        if(need.has(rightChar) && window.get(rightChar) === need.get(rightChar)) 
            matched++

        // shrinking window and move left (if window is valid)
        while(matched === required) {
            // update minLength and minLeft
            // check if window length less than minLength
            if(right - left + 1 < minLength) {
                minLength = right - left + 1
                minLeft = left
            }
            // get leftChar
            const leftChar = s[left]
            // shrinking window (move left) (again to check if there other minimum window)
            window.set(leftChar, window.get(leftChar) - 1 )
            // check if window is unvalid
            if(need.has(leftChar) && window.get(leftChar) < need.get(leftChar))
                // decrement matched window characters
                matched--

            // shrinking window (move left) to be valid again
            left++
            // repeat again
        }
    }
    // return minimumWindow by using substring (extracting from string)
    return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength)
};

```