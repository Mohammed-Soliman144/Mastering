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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // Depth First Search Algorithm
    // using DFS with recursion (implicit call stack LIFO)
    // this is optimal solution which O(H): T and O(N): S
    // which H is the highest path from the root and last leaf
    // which H = O(log N)
    
    // the base case of recurssion where stop call function itself when reach it but must be if root is null return null not return void
    if(root === null) 
        return null;

    // Destructuring or modification in place (swapping wihtout temp)
    // heres below 4 - 2 - 7 becomes 4 - 7 - 2
    [root.left, root.right] = [root.right, root.left]
    // Recursion
    // is call function itself for many times in a call stack with different parameter where each call can create call to the same function until reach the base case will stops calling function
    
    // heres root.left when call the function itself recursively 
    // root.left = root.left.left and so (represent child nodes)
    invertTree(root.left)
    invertTree(root.right)
    
    // final return root after solving the problew which reverse all child nodes and sub child nodes with the same root
    return root
};
```