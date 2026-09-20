/* 

    class TreeNode {
        constructor(value, left = null, right = null) {
            this.value = value
            this.left = left
            this.right = right
        }
    }

    class Tree {
        constructor() {
            this.root = null
        }
    }

    const tree = new Tree()
    tree.root = new TreeNode(4)
    tree.root.left = new TreeNode(2)
    tree.root.right = new TreeNode(7)
    tree.root.left.left = new TreeNode(1)
    tree.root.right.left = new TreeNode(6)
    tree.root.right.right = new TreeNode(9)

    SO Binary Tree as below
                4
        2           7
    1       3    6      9
*/

var invertTree =  function (root) {
    // using DFS (Depth First Search) via recursion - Optimal Solution
    // DFS using recursion and call stack (LIFO) implicity (exact used pattern now)
    // DFS sometime using stack (LIFO) explicity 
    // O(N): T and O(H): S (tree extends by call stack in memory LIFO)
    // which H = O(log N) for balanced tree and H = O(N) for skewed tree
    // H is the highest path from root to last leaf
    // Edge Case and Base Case for recursion
    if(root === null) 
        return null

    // Modification in place (swapping)
    [root.left, root.right] = [root.right, root.left]

    // Recursive Function itself to swap children nodes
    invertTree(root.left)
    invertTree(root.right)

    // finally return the whole tree after reversed
    return root
}

/*   BFS algorithm - tracing
    
    Breadth First Search Algorithm (BFS) => its algorithm used to traversing tree to explore neighbors nodes level by level (wider - horizontally)

    -- Tracing BFS Algorithms: 
        1- Create Queue (follow FIFO)
        2- push root of tree in queue
        3- iterate all queue elements until length is 0 (empty)
        4- remove node from queue and store it in temp variable (shift method)
        5- process node itself
        6- remove node 
        7- add its children
        8- repeat iteration again
*/

var invertBinaryTreeByBFS = function(root) {
    // BFS (Breadth First Search) - Not Optimal Solution
    // BFS using queue (FIFO)
    // O(N): T and O(N): S
    // Edge Case
    if(root === null) return null
    const queue = []
    queue.push(root)
    while(queue.length > 0) {
        let current = queue.shift()
        let left = current.left
        let right = current.right
        current.left = right
        current.right = left
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }

    return root
}