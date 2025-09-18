// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[target] < nums[0]) return 0;
    if (nums[target] > nums[nums.length - 1]) return nums.length;
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(right + left / 2);
        if (nums[mid]===target) return mid;
        if (nums[mid] > target) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return left
};

/*
Time Complexity: O(log n); the while loop will iterate log n amount of 
times worst case scenario performing constant operations which simplifies
down to o(log n);
Space Complexity: O(1); no additional space is needed
*/