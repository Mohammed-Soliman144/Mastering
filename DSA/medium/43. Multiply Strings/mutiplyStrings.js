/**
 * Using Positional Array digit by digit algorithm
 * the optimal solution O(N + M): T O(N + M): S
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // Edge Case if num1 or num2 equal zero
    if(num1 === "0" || num2 === "0") return "0"
    const n = num1.length
    const m = num2.length
    // create array with length n + m and fill array by zeros 
    const result = Array.from({length: n + m}, () => 0)

    // digit by digit multiplication process
    for(let i = n - 1; i >= 0; i--)
        for(let j = m - 1; j >= 0; j--) {
            // conversion string digit to number digit by ASCII (48 - 57) => (0 - 9)
            const multiply = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48)
            // result[i + j + 1] = n + m - 1 => last index in result array
            const sum = multiply + result[i + j + 1]
            // extract last digit from rigit and set in last index in result by moduling % 
            result[i + j + 1] = sum % 10
            // adding remaider from addition of multiplication result and value at index before last index in result array
            // result[i + j] = n + m - 2 which i = n - 1 and j = m - 1
            result[i + j] += Math.floor(sum / 10)
        }

    // strip all leading zeros in result 
    let start = 0
    while(result[start] === 0 && start < result.length) start++
    // return result after slice from first index its value not equal zero and convert to string by join('')
    return result.slice(start).join('')
};