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
 * Symmetric tree => is the mirror image of tree itself which means if divide the tree from center in two parts each part is opposite counterpart for the other.
 * symmetric tree => 
    -- same values for each nodes in the opposite position.
    -- node.left === node.right and node.left.left === node.right.right
    and node.left.right === node.right.left
 * use DFS (Depth First Search) algorithms to compare each both side for each as deep as possible to reach last leaf with recursion (call stack implicity LIFO)
 * O(N): T and O(H): S which H is the highest path from root the last leaf
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // Symmetric => same values of each node in opposite positions
    function isMirror(left, right) {
        // Base Case of recursion (stops)
        // note recursion here build on group of conditions not any loop
        // both sides of node are null => so symmetric
        if(left === null && right === null) return true
        // on of side is null and other side is not null => non-symmetric
        if(left === null || right === null) return false
        // both side values of node are not equal => non-symmetric
        if(left.val !== right.val) return false

        return (
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        )
    }
    return isMirror(root.left, root.right)
};
```