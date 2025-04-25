/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let start = 0;
        let end = grid[i].length - 1;
        while (start <= end) {
            let scan = Math.floor((start + end) / 2);
            if (grid[i][scan] >= 0) {
                start = scan + 1;
            } else {
                end = scan - 1;
            }
        }

        count = count + (grid[i].length - start);
    }
    return count;
};

// none optimized solution
// O(N log M); this is because I loop the entire grid(the rows) and use
// binary search on each row(which is an array) to find the amount of neg
// numbers. Loop is O(N) with N being the number of array rows there are
// and the binary search is O(log m) with m being the amount of columns(or length)
//of the subarray elements there are