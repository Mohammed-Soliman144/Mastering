/**
 * Using Matrix Marker Algorithm (Optimal) => (Modify in place)
 * O(1): S no extra auxiliary space - O(N * M) T which N refers to number of columns and M refers to number of rows
 * @param {number[][]} matrix 
 * @return {void} void does not return modify matrix in place
 */
var setZeroes = function (matrix) {
    let 
        firstRowZero = false,
        firstColZero = false,
        rows = matrix.length,
        cols = matrix[0].length

    // 1- Check if firstRow contains zero
    for(let col = 0; col < cols; col++)
        if(matrix[0][col] === 0) {
            firstRowZero = true
            break
        }

    // 2- check if firstCol contains zero
    for(let row = 0; row < rows; row++)
        if(matrix[row][0] === 0) {
            firstColZero = true
            break
        }

    // 3- Create Outer Marker for any cell contains zero for each row and col of matrix (starts from second row and second column)
    // if exist matrix[2][4] (third row and fifth column) => marker outer counterpart for it so matrix[2][4] => matrix[0][4] = 0 and matrix[2][0]
    for(let row = 1; row < rows; row++)
        for(let col = 1; col < cols; col++)
            if(matrix[row][col] === 0) {
                matrix[row][0] = 0
                matrix[0][col] = 0
            }
            
    // 4- Apply outer Marker for the whole entire row and entire column
    for(let row = 1; row < rows; row++)
        for(let col = 1; col < cols; col++)
            if(matrix[row][0] === 0 || matrix[0][col] === 0)
                matrix[row][col] = 0
    

    // 5- Apply Marker for firstRow if contains zero
    if(firstRowZero)
        for(let col = 0; col < cols; col++)
            matrix[0][col] = 0

    // 6- Apply Marker for firstCol if contains zero
    if(firstColZero)
        for(let row = 0; row < rows; row++)
            matrix[row][0] = 0
}