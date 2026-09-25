/**
 * T: O(log N) - S: O(1)
 * O(log N) which n in each iteration divide by 2 (so if n = 8 so run only 4 iteration)
 * log^2(8) = 2^3 (0 is counting so 4 iteration)
 * ^ means exponential or power
 * @param {number} n
 * @return {number} counter
 */
 var hammingWeight = function (n) {
    // Hamming Weight => means counts all 1 bits in the whole binary number
    let counter = 0
    // Keeping going iteration until n = 0 (stops)
    while(n) {
        // check if last bit in the binary number is 1 or 0 if 1 return 1 otherwise 0 (last bit on the mostright hand)
        let isOne = n & 1
        // if is last bit is 1 increment counter
        if(isOne) counter++
        // decrease number by shiftting the whole bits of binary number one step to right (means division by 2 => n / 2)
        // >> right shift bitwise operator and >>> right shift bitwise operator 
        // >> (not preserve signed integer - negative integers)
        // >>> (preserve signed integer - negative integers)
        n = n >>> 1
    }
    // return counter
    return counter
}


//  Other solution - O(log N): T - O(1): S - the same optimal
var hammingWeight = function(n) {
    let counter = 0
    while(n) {
        n = n & (n - 1)
        counter++
    }
    return counter
}