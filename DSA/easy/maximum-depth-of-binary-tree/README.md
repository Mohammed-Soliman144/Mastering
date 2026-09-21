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
 * using DFS algorithms (recursion with call stack implicity)
 * O(N): T - O(H): S
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // using DFS algorithms (recursion with call stack implicity)
    // BASE CASE
    if(root === null) return 0
    // Recursive Calls for left and right depth
    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)
    // return rootDepth + Math.max(leftDepth, rightDepth)
    return 1 + Math.max(leftDepth, rightDepth)
};

/** Tracing DFS algorithm to get maximum depth
            3
    9               20
            15              7
    Depth First Algorithms:
        depends on go deep as long as to reach last leaf in a tree

        BASE CASE: root === null => return 0
        Recursive Calls: 
            
    3
    (Max for left and right sides for node 9)        
    9 =>  1 + Math.max(0, 0) = 1
null   null => BASE (go up)

    3
    20 => (Max left and right sides) => 1 + Math.max(1, 1) = 2 => go up 
    15 => 1       7 => (Max left and right sides) => 1
null    null    null  null => BASE (go up)

                             3 => 1 + Math.max(1, 2) = 3 
maxDepth for =>    9 node = 1            20 node = 2
 */

```