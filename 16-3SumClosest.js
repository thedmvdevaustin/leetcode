// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a-b);
    let answer = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let start = i+1, end = nums.length - 1;
        let sum;
        while (start < end) {
            sum = nums[i]+nums[start]+nums[end];
            if (sum===target) {
                return sum;
            } else if (sum > target) {
                end--;
            } else {
                start++;
            }
            if (answer===Infinity) {
                answer = sum;
            } else {
                if (Math.abs(sum-target) < Math.abs(answer-target)) {
                    answer = sum
                }
            }
        }
    }
    return answer;
};

/*
Time Complexity: O(n^2); we are traversing the array and for every iteration
we are looping through the entire array which simplifies down to O(n^2);
Space Complexity: O(1); no additional space is needed;
*/