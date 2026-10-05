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
 * Use hashset Algorithm (Optimal Solutio)
 * O(N + M): T which N length of nums1 and M length if nums2
 * O(N): T extra auxiliary space for Set
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set(nums1)
    const result = []

    for(const val of nums2)
        // if delete return true => so is exist in set => so intersection
        if(set.delete(val))
            result.push(val)

    return result
};
```