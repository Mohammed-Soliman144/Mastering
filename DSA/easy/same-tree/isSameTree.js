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
    // DFS O(N): T - O(H): S => Optimal
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


/* Another solution using BFS with queue O(N): T - O(N): S (not optimal) */
var isSameTreeBFS = function (p, q) {
    // note queue is array of arrays to compare level by level each current node in both trees
    const queue = [[p, q]]

    // stops only when queue is empty
    while(queue.length) {
        // remove the first levels of nodes for both trees from queue to proccessed
        // then destructuring in node1, node2 sequentially
        const [node1, node2] = queue.shift()

        // why continue if both nodes are null which i already shift first pair of nodes in queue and that does not reflect i reach last leaf in both or not (not as recursion)
        if(node1 === null && node2 === null)
            continue;
        // only compare values of first level in trees and i do this same operation for each level by level and check if any one node is null return false (so do for currentNode, leftCurrentNode, rightCurrentNode) for both trees
        if(node1 === null || node2 === null || node1.val !== node2.val)
            return false

        // now push leftCurrentNode to queue and compare
        queue.push([node1.left, node2.left])
        // now push rightCurrentNode to queue and compare
        queue.push([node1.right, node2.right])
    }
    // if queue is empty exit loop then both trees are the same
    return true
}