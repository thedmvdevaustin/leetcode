// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let answer = 0;
    let numOfOnes = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right]===1) {
            numOfOnes++
        }
        while ((right - left+1)-numOfOnes > k) {
            if (nums[left]===1) {
                numOfOnes--;
            }
            left++;
        }
        answer = Math.max(answer, right - left +1);
    } 
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we loop through the array and 
the while loops worst case scenario only activates during one iteration
so the complexity doesn't increase
Space Complexity: O(1); no additional space is needed;

*/
