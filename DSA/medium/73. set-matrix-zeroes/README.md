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
 * use in place matrix marker Algorithm (Marker Technique) (Optimal) O(1): Space in place modification - O(N * M): T which N, M which do two sequences nested loops to create and apply markers
 * 1- check if first row contains zeros in any cell
 * 2- check if first col contains zeros entire rows of matrix
 * 3- iterate on each row and column of matrix (start from 1st row and 1st col) then mark only outer row and outer column that as couterpart of cell
 * 4- iterate on each row and columns of matrix (start from 1st row and 1st col) then check if outer row and column is zero the change entire row and column marked as zero
 * 5- at last check if first row and first column if zero change entire first row and first column to zeros
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
     let 
        firstRowZero = false,
        firstColZero = false,
        rows = matrix.length,
        cols = matrix[0].length

    // 1- check if firstRow contain zero
    for(let col = 0; col < cols; col++)
        if(matrix[0][col] === 0) {
            firstRowZero = true
            break
        }
                
    
    // 2- Check if firstCol contain zero
    for(let row = 0; row < rows; row++)
        if(matrix[row][0] === 0) {
            firstColZero = true
            break
        }
                

    // 3- Create Outer Markers if any row or column of matrix contains zero except one
    for(let row = 1; row < rows; row++)
        for(let col = 1; col < cols; col++)
            if(matrix[row][col] === 0) {
                matrix[0][col] = 0
                matrix[row][0] = 0
            }

    // 4- Apply Inner Markers if any row or col of matrix contains zero except one so make entire row and entire column zeros
    for(let row = 1; row < rows; row++)
        for(let col = 1; col < cols; col++)
            // check outer marker equal zero
            if(matrix[0][col] === 0 || matrix[row][0] === 0) 
                // flip entire row and col to zeros
                matrix[row][col] = 0

    // 5- check if firstRow contain zero so flip entire row to zeros
    if(firstRowZero){
        for(let col = 0; col < cols; col++)
            matrix[0][col] = 0
    }


    // 6- check if firstCol contain zero so flip entire col to zeros
    if(firstColZero) {
        for(let row=0; row < rows; row++)
            matrix[row][0] = 0
    }
            
}

```