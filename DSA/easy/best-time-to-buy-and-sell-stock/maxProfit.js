/**
 * 
 * @param {number []} prices - number Array of prices
 * @return {number} maxProfit
 */
var maxProfit = function(prices) {
    // using Dynamic Programming DP - Optimal
    // O(N): T - O(1): S
    let minPrice = Infinity, maxProfit = 0

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) 
            minPrice = prices[i]
        else if (prices[i] - minPrice > maxProfit) 
            maxProfit = prices[i] - minPrice
    }
    return maxProfit
}