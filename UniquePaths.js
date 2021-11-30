// time = O(N*M) space=O(N*M)
// 1 1 1 1  1  1
// 1 2 3 4  5  6
// 1 3 6 10 15 21
const uniquePaths = (m, n) => {
    //matrix arr
    const matrix = [];
    
    //create rows in matrix
    for(let row = 1; row <= n; row++){
        matrix.push([]);
    }
    
    //fill first row with 1
    for(let row = 0; row < n; row++){
        matrix[row][0] = 1;
    }
    
    //fill first col with 1
    for(let col = 0; col < m; col++){
        matrix[0][col] = 1;
    }
    
    //fill each cell bei adding value above and left of it
    for(let row = 1; row < n; row++){
        for(let col = 1; col < m; col++){
            matrix[row][col] = matrix[row][col-1] + matrix[row-1][col];
        }
    }
    
    return matrix[matrix.length-1][m-1];
};
const m = 3;
const n = 7;
console.log(uniquePaths(m,n));
