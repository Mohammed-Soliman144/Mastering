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
 * using DFS algorithm with recursion and call stack implicity
 * O(N): T - O(H): S if balanced binary tree H = O(log N) and if skewed binary tree H = O(N)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // using DFS algorithm with recursion and call stack implicity
    // BASE CASES
    // since root is empty so there is no root-to-leaf-paths  
    if(root === null) return false
    // check at last leaf is not contain children since is a leaf 
    // if leaf so compare targetSum with root.val 
    // which root.val is value of leaf  
    // which targetSum is remaining value the call function recursive received from previous one
    if(root.left === null && root.right === null)
        return root.val === targetSum

    // update targetSum after deducated value of current node from it
    const remaining = targetSum - root.val
    // Recursive Call 
    // continue searching the left and right subtrees
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining)
};
```