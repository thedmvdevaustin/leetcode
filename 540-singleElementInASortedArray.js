// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

 

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left+right)/2);
        if (mid%2===0) {
            if (nums[mid]===nums[mid+1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } else {
            if (nums[mid]===nums[mid-1]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return nums[left];
};

/*
Time Complexity: O(log n); worst case scenario it will take us log n iterations to solve this
and each iteration is performing constant operations which simplifies down to O(log n);
Space Complexity: O(1); no additional space is needed;
*/