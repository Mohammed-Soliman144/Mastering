/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // using greedy algorithm with O(1):S O(N): T
    // Edge Case
    if(prices.length < 2) return 0
    let maxProfit = 0

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) 
            maxProfit += prices[i] - prices[i - 1]
    }
    return maxProfit
};