/**
 * Using Boundary Four Pointers Algorithm to traverse within matrix in spiral order (Optimal)
 * O(N * M): S - O(N * M): T which N number of columns and M Number of rows
 * Spiral Order: Mean Traverse within matrix from outer boundaries to inner boundaries.
 * Spiral Order for below Matrix:
 * [
 *     [10, 11, 12, 15],
 *     [8,  9,  6,  22],
 *     [33, 42, 18, 20],
 *     [80, 60, 90, 66]
 * ] => when spiral matrix becomes as below:
 * [10, 11, 12, 15, 15, 22, 20, 66, 90, 60, 80, 33, 8, 9, 6, 18, 42]
 * Boundary Four Pointers Algorithm Steps:
 * A- top  => points to first row and first column matrix[0][0]
 * B- left => points to first row and first column  matrix[0][0]
 * C- right => points to first row and last column matrix[0][length - 1]
 * D- bottom => points to last row and last column matrix[length - 1][matrix[0].length - 1]
 * 1- Move (traverse) from left to right to visit each column at first row, then increment top++ pointer (to points second row)
 * 2- Move (traverse) from top to bottom to visit all cells at right column then decrement right-- pointer (to points last row and column previous last one)
 * 3- Move (traverse) from right to left to visit all columns at last row then decrement bottom-- (to points matrix[length - 1][matrix[0].length - 2])
 * 4- Move from bottom to top to visit all inner columns inside matrix then increment left++ 
 * @param {number[][]} matrix - array two dimensional N * M 
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // Use Boundary 4 Pointer Algorithm to traverse all elements in matrix in spiral order
    let 
        top = 0,
        left = 0,
        bottom = matrix.length - 1,
        right = matrix[0].length - 1

    const spiralMatrix = []

    while(left <= right && top <= bottom) {
        /** Before any traversing
            T/L         R
            *     *     * 
            *     *     * 
            *     *     * 
            *     *     * B
         */

        // Traverse from left to right (add whole top row)
        for(let i = left; i <= right; i++)
            spiralMatrix.push(matrix[top][i])
        // increment top pointer to points to second row
        top++

        /** Traverse from left to right (add whole top row)
            L           R
            1     2     3  => (whole row [1, 2, 3] added to spiralMatrix)
            *     *     * T 
            *     *     * 
            *     *     * B
         */

        // Traverse from top to bottom (add whole right column)
        for(let i = top; i <= bottom; i++)
            spiralMatrix.push(matrix[i][right])
        // decrement right pointer to points to one before last column
        right--

        /** Traverse from top to bottom (add whole right column)
            L     R      
            1     2     3  => (whole col [4, 5, 6] added to spiralMatrix)
            *     *     4 T
            *     *     5 
            *     *     6 B
         */

        if(top <= bottom) {
            // Traverse from right to left (add whole bottom row)
            for(let i = right; i >= left; i--)
                spiralMatrix.push(matrix[bottom][i])
            // decrement bottom pointer to points to one before last row
            bottom--
        }
        /** Traverse from right to left (add whole bottom row)
            L     R      
            1     2     3  => (whole row [8, 9] added to spiralMatrix)
            *     *     4 T 
          B *     *     5 
            9     8     6 
         */
        
        if(left <= right) {
            // Traverse from bottom to top (to add whole left column)
            for(let i = bottom; i >= top; i--)
                spiralMatrix.push(matrix[i][left])
            // Increment Left pointer to points to one after left column
            left++
        }
        /** Traverse from bottom to top (to add whole left column)
                 R/L      
            1     2     3  => (whole col [5, 7] added to spiralMatrix)
            7     *     4 T 
          B 5     *     5 
            9     8     6 
         */
    }

    return spiralMatrix
}