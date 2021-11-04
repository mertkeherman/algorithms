const spiralOrder = (matrix) => {

    //result returns a spiral array
    const result = [];

    //exception check
    if (matrix.length === 0) {
        return result;
    }

    //setting pointers
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    //run until matrix is exhausted
    while (top <= bottom && left <= right) {

        //go left to right
        for (let i = left; i <= right; i++)
            result.push(matrix[top][i])
        top++;

        //got top to bottom
        for (let i = top; i <= bottom; i++)
            result.push(matrix[i][right])
        right--;

        //go right to left
        if (top <= bottom) {
            for (let i = right; i >= left; i--)
                result.push(matrix[bottom][i])
            bottom--
        }

        //go bottom up
        if (left <= right) {
            for (let i = bottom; i >= top; i--)
                result.push(matrix[i][left])
            left++
        }

    }
    return result;

};

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(spiralOrder(matrix));