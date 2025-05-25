// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k<2) {
        return 0;
    }
    let answer = 0;
    let product = 1;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        product*=nums[right];
        while (product >= k) {
            product/=nums[left];
            left++;
        }
        answer+=(right-left+1)
    }
    return answer;
};

/*
Time Complexity: O(N); while loop inside the for loop at worst case doesn't 
activate on every iteration on worst case scenario so the loop inside isn't O(N)
making the for loop O(N) and simplifying the code down to O(N)
Space Complexity: O(1); no additional space needed
*/