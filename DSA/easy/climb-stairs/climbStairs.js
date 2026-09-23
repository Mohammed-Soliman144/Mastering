
/**
 * use Fabonacci Algorithm which F(n) = F(n - 1) + F(n - 2) any Dynamic Programming
 * O(N): T - O(1): S - Optimal Solution
 * @param {number} n - number of stairs
 * @return {number} prev - number of ways to reach number of stairs
 */
var climbStairs = function(n) {
     // Fabonacci Algorithm or fabonacci sequence => is a sequence of numbers which the current number depends on or a result of two previous numbers or in other words when there is a sequence which each property (state) in a sequence depends on the two previous states or properties
    // F(n) = F(n - 1) + F(n - 2)  
    // F(currentState) = F(currentState - 1) + F(currentState - 2)

    // the optimal solution is use fabonacci algorithm and use dynamic programming technique saved more space (space complexity) 
    // if use recursion is correct for this problem but recursion with DFS is guaranteed the current node i only visited it once time not more so [O(N): T, O(H): S] but recursion here is always repeat visit state more than one (always twice) [O(1):S, O(2**N): T]

    // BASE CASE => we already known before that if n = 1 (staircase) so number ways to reach is 1 and if n = 2 (staircase) the number of ways to reach is 2
    if(n <= 2)
        return n

     // for get any climb which n is greater than 2 
    /**
        indicator (pointer)   prevPrev    prev    current  
        staircase (n)          1         2        3
        ways                   1         2        3

        ** so always prev (previous to current directly) = (current n - 1)
        ** but always prevPrev (before previous by one is a running pointer always move based on current) = (current n - 2) 
     */
    let 
        prev = 2,
        prevPrev = 1
        
     // i = 3 => because we already known before if stairs is n = 1 so ways = 1 and if stairs n = 2 so ways to reach 2th stairs is 2
    for(let i = 3; i <= n; i++) {
        // always current F(n) = F(n-1) + F(n - 2) 
        const current = prev + prevPrev
        // move running pointers make before previous is previous
        prevPrev = prev
        // move running pointer make previous is current
        prev = current
    }

    // return previous which is already current and current = F(n - 1) + F(n - 2)
    return prev
}


/* Use Recursion to solve climbStairs (not optimal) O(N): T - O(N): S with object (hashmap) for memorization */
var climbStairsRecursion = function(n, memo = {}) {
    // BASE CASE
    if(n <= 2)
        return n

    if(memo[n] !== undefined) return memo[n]

    memo[n] = climbStairsRecursion(n - 1) + climbStairsRecursion(n - 2)

    return memo[n]
}


