/**
 * Required return level order traversal of each node value which each node (leftNode.val, rightNode.val) (level by level) and return array of arrays
 * using BFS - queue (FIFo)
 * O(N): T and O(N): S
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {   
    // using BFS algorithm sense the problem need to visit each node level by level
    // Edge Case
    if(root === null) return []
    // Declare queue and result as array of arrays
    const queue = [root], result = []
    // loop on each element in queue until queue is empty
    while(queue.length) {
        let len = queue.length
        result.push(queue.map(node => node.val))
        while(len--) {
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return result
}

/**
    -- BFS Algorithms:
        create queue
        push element to queue
        shift element from queue
        process children of current node shifted from the front of queue
        repeat
    -- Tracing Code
        EDEG CASE => if root === null return []
        declare one queues and result as array of arrays
        push root to queue
        loop on element in queue until if empty
        get length of queue as condition for inner loop to ensure the inner loop only visited node once (enhance time complexity)
        shift element from queue
        process children and added to queue
        stop inner loop
        repeat
 */