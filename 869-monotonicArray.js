// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    function helper(isIncreasing) {
        if (isIncreasing) {
            for (let i = 0; i < nums.length-1; i++) {
                if (nums[i] > nums[i+1]) return false
            }
        } else {
            for (let i = 0; i < nums.length-1; i++) {
                if (nums[i] < nums[i+1]) return false;
            }
        }
        return true;
    }

    return helper(true) || helper(false);
};

/*
Time Complexity: O(n); we are doing 2 separate traversals of the array 
which is O(N+N) which simplifies down to O(N);
Space Complexity: O(1); no additional space is needed
*/