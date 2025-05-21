// An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
// Given an integer array nums, return the number of arithmetic subarrays of nums.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 5000
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    if (nums.length < 3) {
        return 0;
    }
    let start = 0;
    let answer = 0;
    let difference = nums[0]-nums[1];
    for (let end = 2; end < nums.length; end++) {
        if (end-start+1>=3 && nums[end-1]-nums[end]===difference) {
            answer = answer + (end-start+1)-3+1;
        } else {
            start++;
            while (nums[start]-nums[start+1]===difference) {
                start++;
            }
            difference = nums[start] - nums[start+1];
        }
    }
    return answer;
};

/*
Time Complexity: O(N): worst case scenario we only have to loop through the 
array; the while loop will active on the worst case during one iteration
so it results on being constant time
Space Complexity: O(1); only constant additional space is needed
*/