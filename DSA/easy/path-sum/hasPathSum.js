/**
 * 
 */

var hasPathSum = function (root, targetSum) {
    // using DFS algorithm with recursion and call stack implicity (LIFO)
    // BASE CASES
    // since root is empty so there is no root-to-leaf-paths
    if(root === null) return false
    // check if last leaf if current leaf value equals targetSum
    // leaf is node without children (no left or right node)
    if(root.left === null && root.right === null)
        return targetSum === root.val

    // update remaining by subtracted current node value from it
    const remaining = targetSum - root.val

    // RECURSIVE CALL
    // continue searching the left and right subtrees to find last leaf
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining)
}