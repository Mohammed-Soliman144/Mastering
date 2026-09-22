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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // DFS O(N): T - O(H): S
    // Using DFS with recursion and call stack LIFO
    // BASE CASES
    // if both trees are completely empty (same)
    if(p === null && q === null) return true
    // if some one is empty and other not (not same)
    if(p === null || q === null) return false
    // if value of current nodes are not equal (not same)
    if(p.val !== q.val) return false

    // RECURSIVE CALL
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

```