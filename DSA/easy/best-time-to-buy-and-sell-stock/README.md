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
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // O(N): T - O(1): S
    let maxProfit = 0, miniPrice = Infinity;

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < miniPrice)
            miniPrice = prices[i]
        else if(prices[i] - miniPrice > maxProfit)
            maxProfit = prices[i] - miniPrice
    }
    return maxProfit
}
```