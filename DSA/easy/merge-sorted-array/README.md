# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- use multi pointers technique (espacially three pointers)
- first points to last largest number in nums1
- second points to last largets number in nums2
- third points to currentIndex in nums1 which currentIndex = firstArrayLength + secondArrayLength - 1

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Time Complexity O(m + n) 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- Space Complexity O(1)
# Code
```javascript []
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Three pointers technique 
    // first points to last largest num in first array
    // second points to last largest num in second array
    // third points to currentIndex in first array (which equals m + n - 1)
    let firstPtr = m - 1, secondPtr = n - 1, currentPtr = m + n - 1
    while(secondPtr >= 0) {
        if(firstPtr >= 0 && nums1[firstPtr] > nums2[secondPtr]) {
            nums1[currentPtr] = nums1[firstPtr]
            firstPtr--
        } else {
            nums1[currentPtr] = nums2[secondPtr]
            secondPtr--
        }
        currentPtr--
    }
};
```