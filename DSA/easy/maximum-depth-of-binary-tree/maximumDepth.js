/**
 * using DFS Algorithms (recursion and call stack LIFO implicity)
 * O(N): T and O(H): S which H the highest path from root to last leaf
 * @param {TreeNode} root 
 * @returns {number} MaximumDepth level
 */
var maxDepth = function(root) {
    // using DFS Algorithm (recursion and call stack implicity)
    // BASE CASE
    if(root === null) return 0
    // Recursive Call
    const leftDepth = maxDepth(root.left)
    // Recursive Call
    const rightDepth = maxDepth(root.right)
    // return maximumDepth = rootDepth + Math.max(leftDepth, rightDepth)
    return 1 + Math.max(leftDepth, rightDepth)
}

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