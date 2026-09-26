// Use hashmap datastructure (object) with Dynamic Programming
// O(N): T and O(1): S
var romanToInt = function(s) {
    let sum = 0
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
        const 
            curr = hashmap[s[i]], 
            next = hashmap[s[i + 1]] || 0
        if(curr < next) 
            sum -= curr
        else
            sum += curr
    }
    return sum
}