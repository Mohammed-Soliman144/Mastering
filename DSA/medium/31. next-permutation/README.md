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
  * Permutation 1 => [10, 11, 12] => position 0 => 10 so leftovers 11, 12 swapping them [10, 12, 11]
    Permutation 2 => [10, 12, 11] => position 1 => 11 so leftovers 10, 12 swapping them [12, 10, 11]
    Permutation 3 => [12, 10, 11] => position 2 => 12 so leftovers 10, 11 swapping them [12, 11, 10]
** explaination of permutation for above example
        1- take position one by one from original array (before any permutation) then extract leftovers and swapping them
        2- also take position from original array extract leftovers from orginal array but swapping them based on previous permutation and so on
        3- to confirm you permutation is correct must first array [original] last permutation must be reverse array for original one.
        4- total permutation can get by factorial formula
            n! = n * (n - 1) * (n - 2) * ....... * 1
            which n is number of elements in array
        5- how check next permutation ?
        [4, 2, 7, 5, 8, 6, 3, 1]
        the pivot is 5
        the successor is 6
        the leftovers 8, 5, 3, 1
        so
        [4, 2, 7, 5, 8, 6, 3, 1]
        so next permutation is
        [4, 2, 7, 6, 1, 3, 5, 8]

 * Permutation => is lexicographical ordering of elements in array in acending order 
    total permutation => n! = n * (n - 1) * (n - 2) * ....... * 1
    next permutation => 
        1- get the pivot => scan from right to left if current position is smaller than the next
        2- get the successor => scan from right to left if current position is greater than the pivot
        3- get the leftovers => all elements between the pivot and successors
        4- swapping all leftovers (reverse all)
 * Permutation => is the way to rearrangement order of array of elements.
 * Lexicographical Order => is order array of element in ascending order or non-decreasing order (in general means that)
 * Pivot => when scan array from right to left and compare each element by previous one if element is greater than previous one so previous one is pivot
 * Successor => when scan array from right to pivot and compare each element by previous one if element
 * O(N): T - O(1): S
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length
    let pivot = len - 2

    // 1- Find the pivot
    while(pivot >= 0 && nums[pivot] >= nums[pivot + 1]) pivot--;

    // 2- Find Successor
    if(pivot >= 0) {
        let successor = len - 1
        while(nums[successor] <= nums[pivot]) successor--
        // swapped pivot and successor 
        [nums[pivot], nums[successor]] = [nums[successor], nums[pivot]]
    }

    // 3- Swapping the whole elements and elements between pivot and last element in array
    let left = pivot + 1, right = len - 1
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
        
};
```