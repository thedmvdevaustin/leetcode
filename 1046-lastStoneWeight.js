// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

 

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:

// Input: stones = [1]
// Output: 1
 

// Constraints:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a,b) => a-b);
        let difference = Math.abs(stones[stones.length - 1] - stones[stones.length - 2]);
        if (difference===0) {
            stones = stones.slice(0, stones.length - 2)
        } else {
            stones = stones.slice(0, stones.length - 2)
            stones.push(difference)
        }
        
    }
    return stones.length ===1 ? stones[0] : 0
};

/*
Time Complexity: O(n^2 log n): worst case scenario I am performing a sorting 
algorithm which is N log N for every time that stones length is greater than 1
which would be n^2 time;
Space Algorithm: depending on the sorting algorithm used can be n log n or n^2 at worst 
case;
*/

