// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let start = 0;
    const s = new Set();
    for (let end = 0; end < nums.length; end++) {
        if (end - start > k) {
            s.delete(nums[start]);
            start++;
        }
        if (s.has(nums[end])){
            return true;
        } else {
            s.add(nums[end]);
        }
    }
    return false
};

/*
Time Complexity: O(N); worst case scenario we have to traverse the entire
array to find out there aren't any distinct indices that match the 
criteria
Space Complexity: O(K); K being the size of the window we are examining;
since we are creating a set to hold the elements that are in the window, 
and K is the size of the window worst case scenario
*/