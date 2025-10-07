// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer = 0;
    nums.forEach(element => answer^=element);
    return answer;
};

/*
Time Complexity: O(N); worst case we have to loop over the array once and perform a constant
operation which simplifies down to linear time;
Space Complexity: O(1); no addtional space is needed which is simplified down to constant time
*/