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
    // using BFS with queue (FIFO) to return the level order traversal level by level
    // Edge Case
    if(root === null) return []
    const queue = [root], result = []
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
};

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
```