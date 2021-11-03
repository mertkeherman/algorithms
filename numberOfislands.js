const numIslands = (grid) => {

    let islandCount = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {

            if (grid[row][col] === '1') {
                islandCount++;
                sinkIsland(grid, row, col);
            }
            console.log(col);
        }
    }

    function sinkIsland(grid, row, col) {
        if (row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[row].length ||
            grid[row][col] === "0"
        ) {
            return;
        }

        grid[row][col] = "0";
        sinkIsland(grid, row - 1, col);
        sinkIsland(grid, row + 1, col);
        sinkIsland(grid, row, col - 1);
        sinkIsland(grid, row, col + 1);
    }

    return islandCount;
};

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  console.log(numIslands(grid));