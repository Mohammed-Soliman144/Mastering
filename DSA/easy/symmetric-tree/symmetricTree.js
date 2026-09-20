/**
 * using DFS Depth First search algorithm wiht recursion (and implicity call stack LIFO)
 * O(N): T - O(H): S which H is the highest path from parent to last leaf
 * @param {Tree} root 
 * @returns {boolean} true if symmetric and otherwise is false
 */
var isSymmetric = function (root) {
    function isMirror(left, right) {
        // Base Case of recursion (Stops)
        // if both nodes are null => so symmetric
        if(left === null && right === null) return true
        // if only one side of node is null => so non-symmetric
        if(left === null || right === null) return false
        // if value of each side of node are not equal => so non-symmetric
        if(left.val !== right.val) return false

        return (
            isMirror(left.left, right.right) && 
            isMirror(left.right, right.left)
        )
    }
    return isMirror(root.left, root.right)
}