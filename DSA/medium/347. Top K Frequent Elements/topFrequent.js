/**
 * using hashmap to track frequency and bucket sorting algorithm to catch the most top frequency equals target K
 * Optimal O(N): T O(N): S
 * bucket sorting algorithm:
    -- actually used with most collection of bounded elements (or elements within known range) and can use also with of collect of un bounded elements
    -- buckets sorting is a group of slots (buckets) which each bucket contains elements based on many criteria may be frequency (number of occurences as this problem) some times based below equations:
    ** range = maxVal - minVal + 1
    ** n = array.length
    ** bucketIndex = Math.floor((elementVal - minVal) * n / range)
    -- actually what happen above i have a group of values inside bounded range so i get maxVal added one to it (count start from 1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // create hashmap {num (key) => counter (value)}
    const hashmap = new Map()
    // fill hashmap with frequency of each element
    for(const num of nums)
        hashmap.set(num, (hashmap.get(num) || 0) + 1)

    // create buckets as array of arrays with length = nums.length + 1
    // [0, 1,  2, 3 => nums.length + 1] => track frequency (outer array)
    // [ , [1], [2, 3], [4]] => inner array represent whole element with the same frequency
    // actually correct visualization as below
    // index =>  0,   1,    2,           3
    // buckets=> [   [1],   [2, 3],     [4]]
    // also buckets array track frequency and count starts from 1 not zero (as index) so length of buckets = nums.length + 1 
    // actually 0-index will not need to it will not touch it which there is no any element has frequency zero (so already element not exist)
    const buckets = Array.from({length: nums.length + 1}, _ => [])

    // fill buckets array with elements based on its frequency
    for(const [num, count] of hashmap)
        buckets[count].push(num)

    // array of result of top most frequencies elements match k
    const result = []

    // check now which of frequencies elements in buckets that matched target k
    for(let count = buckets.length - 1; count >= 1 && result.length < k; count--) {
        for(const num of buckets[count]) {
            result.push(num)
            if(result.length === k)
                // exit inner loop then check condition of outer one result.length < k and exist outer loop also
                break; 
        }
    }

    return result
};