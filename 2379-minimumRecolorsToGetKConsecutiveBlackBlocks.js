// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.

// You are also given an integer k, which is the desired number of consecutive black blocks.

// In one operation, you can recolor a white block such that it becomes a black block.

// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

 

// Example 1:

// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW". 
// It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.
// Example 2:

// Input: blocks = "WBWBBBW", k = 2
// Output: 0
// Explanation:
// No changes need to be made, since 2 consecutive black blocks already exist.
// Therefore, we return 0.
 

// Constraints:

// n == blocks.length
// 1 <= n <= 100
// blocks[i] is either 'W' or 'B'.
// 1 <= k <= n

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let min = blocks.length + 1;
    let start = 0;
    let numOfB = 0;
    for (let end = 0; end < blocks.length; end++) {
        if (blocks[end]==='B') {
            numOfB++;
        }
        if (k===end-start+1) {
            min = Math.min(min, k-numOfB);
            if (blocks[start]==='B') {
                numOfB--;
            }
            start++;
        }
    }
    return min;
};

/*
Time Complexity: O(N); in all scenarios we are looping through the entire
length of blocks; which is linear time;
Space Complexity: O(1); only constant additional space is needed
*/

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let left = 0, answer = Infinity, numOfBlackBlocks = 0;
    for (let right = 0; right < blocks.length; right++) {
        if (blocks[right]==='B') numOfBlackBlocks++;
        if (right - left + 1 === k) {
            answer = Math.min(answer, k - numOfBlackBlocks);
            if (blocks[left]==='B') numOfBlackBlocks--;
            left++;
        }
    }
    return answer;
};

/*
Time Complexity: O(N); in all scenarios we are looping through the entire
length of blocks; which is linear time;
Space Complexity: O(1); only constant additional space is needed
*/