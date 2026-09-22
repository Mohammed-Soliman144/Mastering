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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // What is balance binary tree
    // balance binary tree when (leftHeight - rightHeight) <= 1 otherwise is not balance
    // leftHeihgt is height from root to last leaf on left side
    // using DFS with recursion and call stack implicity (LIFO)
    // O(N): T - O(H): S
    function getHeight(node) {
        // BASE CASE 1
        // if node is null return 0 which if tree is empty so it balance binary tree which is adapted with (leftHeight - rightHeight) <= 1
        if(node === null) return 0
        // Calculate height of left side for tree => Recursive Call
        const leftHeight = getHeight(node.left)
        // Early Return (not BASE CASE) => not real if new parameter return from recursive call function in call stack leftHeight = -1 so tree is not balance
        if(leftHeight === -1) return -1
        // Calculate height od right side for tree => Recursive Call
        const rightHeight = getHeight(node.right)
        // Early Return (not BASE CASE) => not real if new parameter return from recursive call function in call stack rightHeight = -1 so tree is not balance
        if(rightHeight === -1) return -1
        // Early Return (not BASE CASE) => if absolute value of difference between leftHeight and rightHeight > 1 return -1 so it is not balance tree 
        if(Math.abs(leftHeight - rightHeight) > 1) return -1

        // Contract last return get Math.max(leftHeight, rightHeight) + 1 =>add one to add current node
        return 1 + Math.max(leftHeight, rightHeight)
    }
    // if recursion return -1 is not balance tree otherwise is balance
    return getHeight(root) !== -1
};