// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0, visited = new Set();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]==="1" && !visited.has(`${i},${j}`)) {
                dfs(i,j);
                count++
            }
        }
    }

    function dfs(i,j) {
        let stack = [[i,j]];
        while (stack.length) {
            let [ row, col ] = stack.pop();
            if (row - 1 >= 0) {
                if (grid[row-1][col]==="1" && !visited.has(`${row-1},${col}`)){
                    stack.push([row-1,col]);
                    visited.add(`${row-1},${col}`)
                }
            }
            if (row + 1 < grid.length) {
                if (grid[row+1][col]==="1" && !visited.has(`${row+1},${col}`)){
                    stack.push([row+1,col]);
                    visited.add(`${row+1},${col}`)
                }
            }
            if (col - 1 >= 0) {
                if (grid[row][col-1]==="1" && !visited.has(`${row},${col-1}`)){
                    stack.push([row,col-1]);
                    visited.add(`${row},${col-1}`)
                }
            }
            if (col + 1 < grid[row].length) {
                if (grid[row][col+1]==="1" && !visited.has(`${row},${col+1}`)){
                    stack.push([row,col+1]);
                    visited.add(`${row},${col+1}`)
                }
            }
        }
    }
    return count
};

/*
Time Complexity: O(m*n); worst case scenario we have to traverse the entire
grid to find if it is a separate island or not
Space Complexity: O(m*n); worst case scenario we have all "1" so we will add 
that to the set
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let answer = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]==='1') {
                dfs(i,j);
                answer++;
            }
        }
    }

    function dfs(row, col) {
        if (row < 0 || row >= grid.length || col < 0  || col >= grid[row].length || grid[row][col]==='0') {
            return;
        }
        grid[row][col] = '0';
        dfs(row+1, col); // 
        dfs(row-1,col);//
        dfs(row, col+1);//
        dfs(row, col-1);//
        return;
    }
    return answer;
};

/*
Time Complexity: O(m*n); worst case scenario we will have to traverse through
every element in the grid;
Space Complexity: O(m*n); worst case the recursion stack will be called
the size of the grid amount of times if it is filled with all ones
*/