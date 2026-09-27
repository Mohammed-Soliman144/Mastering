/**
 * This Problem include underneath floyed algorithm (or cycle detection algorithm)
 * floyed algorithm (cyle detection algorithm) is when you have a problem and to solve must be follow a group of steps and if problem become finite cycle detection if has ended point but becomes infinite cycle detection if has endless point.
 * a specially for this problem a cycle detection is a group of number sequence which each step in sequence represent total doubling digits of number (next state) and first state is always the initial number => the optimat solution here is use hashset datastructure with Set as datatype in js but may be use two pointers technique (slow and fast) to solve it as (cycle linkedlist)
 * for hashset datastructure O(Log N): T - O(Log N): S
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // create hashset datastructure (set) to store all sequence of number 
    // sequence of number = current state of number and next number as result of doubling its digits (next state)
    // so we storing or observing states of numbers itself not its digits 
    const hashSet = new Set()

    // iteration of sequences of number until n becomes happy (n === 1) and hashSet does not has n (which means n is unique)
    while(n !== 1 && !hashSet.has(n)) { 
        // add all states of sequence number
        // this step can be set outside loop but in this case need to repeat inside loop again to add new state of sequence number
        // which set by default ignore duplication
        hashSet.add(n)
        // declare sum inside loop which always reseting it
        let sum = 0
        // iteration of digits of number until n becomes 0
        while(n > 0) {
            let lastDigit = n % 10
            sum += Math.pow(lastDigit, 2)
            n = Math.floor(n / 10)
        }
        // now n = 0 (exit loop) and sum has a next state of number (as result of total doubling its digits) 
        // so make n = sum (to store in hashSet) then repeat all other remain sequences of states
        n = sum
    }
    // after ends or exist outer loop must be one of two cases:
    // 1- total doubling digits of its number becomes 1 (finite cycle detection and n === 1)
    // 2- total doubling digits of its number becomes equals any previous states of sequence (infinite cycle detection and n !== 1)
    return n === 1
};

// Second Solution with two pointer technique (slow and fast)
// O(Log N): T - O(1): S
const getSumNum = (num) => {
    let sum = 0
    while(num) {
        let lastDigit = num % 10
        sum += Math.pow(lastDigit, 2)
        num = Math.floor(num / 10)
    }
    return sum
}

var isHappyByPointers = function(n) {
    // make both pointer always starting points to first state (initial state) then increment slow by one and fast by increment by two
    let slow = n
    let fast = n
    // at first => we need a loop to move pointers and will stop loop inside it
    while(true) {
        // slow => move slow pointer to next state of number
        slow = getSumNum(slow)
        // fast => move fast pointer to nextNext state of number
        fast = getSumNum(getSumNum(fast))

        // in this problem which is a sequence of number must be in one case at least fast equals slow
        if(fast === slow) {
            return fast === 1
        }
    }
}