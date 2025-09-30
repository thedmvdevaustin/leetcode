// You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill:

// Begin with the starting pixel and change its color to color.
// Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
// Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
// The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.

 

// Example 1:

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

// Output: [[2,2,2],[2,2,0],[2,0,1]]

// Explanation:



// From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.

// Note the bottom corner is not colored 2, because it is not horizontally or vertically connected to the starting pixel.

// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0

// Output: [[0,0,0],[0,0,0]]

// Explanation:

// The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.

 

// Constraints:

// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let visited = new Set([`${sr},${sc}`]), stack = [[sr,sc]], startColor = image[sr][sc];
    image[sr][sc] = color;
    while (stack.length) {
        let [row, col] = stack.pop();
        if (row-1 >= 0) {
            if (image[row-1][col]===startColor && !visited.has(`${row-1},${col}`)) {
                image[row-1][col] = color;
                stack.push([row-1,col]);
                visited.add(`${row-1},${col}`);
            }
        }
        if (row+1 < image.length) {
            if (image[row+1][col]===startColor && !visited.has(`${row+1},${col}`)) {
                image[row+1][col] = color;
                stack.push([row+1,col]);
                visited.add(`${row+1},${col}`);
            }
        }
        if (col-1 >= 0) {
            if (image[row][col-1]===startColor && !visited.has(`${row},${col-1}`)) {
                image[row][col-1] = color;
                stack.push([row,col-1]);
                visited.add(`${row},${col-1}`);
            }
        }
        if (col+1 < image[row].length) {
            if (image[row][col+1]===startColor && !visited.has(`${row},${col+1}`)) {
                image[row][col+1] = color;
                stack.push([row,col+1]);
                visited.add(`${row},${col+1}`);
            }
        }
    }
    return image;
};
//SECOND SOLUTION RECURSIVE SOLUTION
/*
Time Complexity: O(m*n) worst case scenario we  will still have to traverse
the entire grid, given that the grid is filled with all 1's;
Space Complexity: O(m*n) worst case scenario all the elements in the grid
will be put inside of the hash set 
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    function bfs(row, col, ogColor) {
        if (row < 0 || col < 0 || row > image.length-1 || col > image[row].length-1 || image[row][col]!==ogColor || image[row][col]===color) {
            return;
        }
        image[row][col] = color;
        bfs(row+1, col, ogColor);
        bfs(row-1, col, ogColor);
        bfs(row, col-1, ogColor);
        bfs(row, col+1, ogColor);
        return;
    }
    bfs(sr, sc, image[sr][sc]);
    return image
};

/*
Time Complexity: O(M*N); worst case scenario we will have to traverse the entire grid given
that the grid is filled with all 1's;
Space Complexity: O(M*N); worst case scenario the recursion stack will be filled with as many
function as there are elements in the grid;
*/