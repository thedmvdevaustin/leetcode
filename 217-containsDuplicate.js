// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const s = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])){
            return true
        }
        s.add(nums[i]);
    }
    return false
};

/*
Time Complexity: O(N); worst case scenario, all elements are distinct so
we traverse the entire array and return false
Space Complexity: O(N); worst case scenario we create a set and all elements
are distinct so we fill the set with the entire array and return false
*/