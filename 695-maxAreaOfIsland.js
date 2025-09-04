// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

 

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let answer = 0, visited = new Set();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]===1 && !visited.has(`${i},${j}`)) {
                answer = Math.max(answer, bfs(i,j));
            }
        }
    }

    function bfs(i,j) {
        let queue = [[i,j]];
        visited.add(`${i},${j}`)
        let count = 1;
        while (queue.length) {
            let [ row, col ] = queue.shift();
            if (row-1 >= 0) {
                if (grid[row-1][col]===1 && !visited.has(`${row-1},${col}`)) {
                    queue.push([row-1,col]);
                    visited.add(`${row-1},${col}`);
                    count++;
                }
            }
            if (row+1 < grid.length) {
                if (grid[row+1][col]===1 && !visited.has(`${row+1},${col}`)) {
                    queue.push([row+1,col]);
                    visited.add(`${row+1},${col}`);
                    count++;
                }
            }
            if (col-1 >= 0) {
                if (grid[row][col-1]===1 && !visited.has(`${row},${col-1}`)) {
                    queue.push([row,col-1]);
                    visited.add(`${row},${col-1}`);
                    count++;
                }
            }
            if (col+1 < grid[row].length) {
                if (grid[row][col+1]===1 && !visited.has(`${row},${col+1}`)) {
                    queue.push([row,col+1]);
                    visited.add(`${row},${col+1}`);
                    count++;
                }
            }
        }
        return count;
    }
    return answer;
};

/*
Time Complexity: O(m*n): we have to traverse through every element in the
grid which simplifies down to O(m*n);
Space Complexity: O(m*n); worst case scenario we add every element into
the hash set
*/