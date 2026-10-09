/**
 * using prefix sum and hashmap algorithm O(N): T O(N): S
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// using prefix sum and hashmap algorithm 
var subarraySum = function(nums, k) {
    // arr => [1, -1, 1, 1, 1, 1]   k = 3
    /** with hashmap can lookup and search for (sum - k) (subarray sum) in  O(1) linear time which map.get(key) but nested loop n square for time
        hashmap => prefixSum (key) => counter of prefix sum (value)
        diff => sum - target (k)
    i   sum   diff  found  counter     prefixSum => counter (hashmap)
    --  --     --    ---    ----      {0 => 1} // initialization
    0    1     -2     no      0       {1 => 1}
    1    0     -3     no      0       {0 => 2} updated key 0
    2    1     -2     no      0       {1 => 2} updated key 1
    3    2     -1     no      0       {2 => 1}
    4    3      0     yes     2       {3 => 1}
    5    4      1     yes    2+2=4    {4 => 1}


    return counter = 4 (answer)
    // indexes  0   1  2  3  4  5
    // arr =>  [1, -1, 1, 1, 1, 1]   k = 3
    // sub =>          [1, 1, 1]    => [2, 3, 4] => counter = 1
    // sub =>             [1, 1, 1] => [3, 4, 5] => counter = 2
    // sub =>  [1, -1, 1, 1, 1]     => [0, 1, 2, 3, 4] => counter = 3
    // sub =>      [-1, 1, 1, 1, 1] => [1, 2, 3, 4, 5] => counter = 4
    // answer is counter 4
    =========================================== Tech Terms
    => contiguous subarray => is a partion of array with consecutive positions without empty positions (actually whole array is subarray)
    =>   index  =>  0    1   2   3   4
    =>   values => [10, 20, 30, 40, 50]     
    =>  [10] => contiguous subarray => true
    =>  [20] => contiguous subarray => true and so on [each index represent as contiguous subarray]
    =>  [10, 20, 30] => contiguous subarray => true  [0, 1, 2]
    =>  [10, 40, 50] => contiguous subarray => false [0, 3, 4]
    =>  [10, 20, 30, 40, 50] => whole array => contiguous subarray => true      
*/
    

    // create hashmap to keep track counter of subarray sum match target k
    const hashmap = new Map()
    // if subarray starts from first index 0 in array so must initial prefix sum 0 and count 1
    hashmap.set(0, 1)

    // currentSum of each iteration
    let currSum = 0
    // counter to track number of subarray sum match or satisfy target (k)
    let counter = 0

    for(const num of nums) {
        // increment current sum by current value based on iteration
        currSum += num
        // get difference which is (sum - k)
        // if exist in hashmap that means there is subarray sum equals k
        const diff = currSum - k
        // increment counter if exist or found diff in hashmap
        counter += (hashmap.get(diff) || 0)
        // set or insert prefixSum to current index (at that iteration) by counter of each prefixSum 
        // currSum => sum of all previous elements from zero index to current iteration (means prefixSum)
        // if exist prefixSum in hashmap increment counter by one otherwise set counter = 1
        hashmap.set(currSum, (hashmap.get(currSum) || 0) + 1)
    }

    return counter
};


// Brute Force solution O(N**2): T O(1):S  (n square)
var subarrayByBruteForce = function(nums, k) {
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0
        for(let j = i; j < nums.length; j++) {
            sum += nums[j]
            if(sum === k)
                counter++
        }
    }     
    return counter
}