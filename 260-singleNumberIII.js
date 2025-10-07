// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]
 

// Constraints:

// 2 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each integer in nums will appear twice, only two integers will appear once.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0;
    for (let element of nums) {
        xor ^= element;
    }
    let diff = xor & -xor;
    let x = 0, y = 0;
    for (let element of nums) {
        if (diff & element) {
            x ^= element;
        } else {
            y ^= element;
        }
    }
    return [x,y];
};

/*
Time Complexity: O(n); worst case scenario we perform 2 separate loops that are performing
constant operations which is O(N+N) which simplifies down to O(N);
Space Complexity: O(1); no additional space needed outside of contant space
*/