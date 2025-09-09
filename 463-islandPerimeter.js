// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

// Example 1:


// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.
// Example 2:

// Input: grid = [[1]]
// Output: 4
// Example 3:

// Input: grid = [[1,0]]
// Output: 4
 

// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.
// There is exactly one island in grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let visited = new Set(), answer = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]===1) {
                dfs(i,j);
                break;
            }
        }
    }
    
    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col]===0) {
            answer++;
            return;
        }
        if (visited.has(`${row},${col}`)) return;
        visited.add(`${row},${col}`);
        let top = dfs(row - 1, col), bottom = dfs(row + 1, col), left = dfs(row, col - 1), right = dfs(row, col + 1);
        return;
    }

    return answer;
};

/*
Time Complexity: O(m*n); worst case scenario we have to traverse every element
inside of the grid;
Space Complexity: O(m*n); worst case scenaerio we fill the recursion stack
up to the amount of elements inside of the grid
*/