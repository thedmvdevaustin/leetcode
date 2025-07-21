// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = {}, total = 0;
    nums.forEach(x => map[x] ? map[x]++ : map[x] = 1);
    for (const value in map) {
        total = total + map[value]*(map[value]-1)/2
    }
    return total
};

/*
Time Complexity: O(N); worst case cenario we loop through every element in 
the array once and perform constant time codes;
Space Complexity: O(N); worst case we store the amount of unique nums in 
our map which could be all distinct numbers
*/
