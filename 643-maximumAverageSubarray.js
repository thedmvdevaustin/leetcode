// ou are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
 

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let answer = -Infinity;
    let sum = 0;
    let start = 0;
    for (let end = 0; end < nums.length; end++) {
        sum +=nums[end];
        if (k<end-start+1) {
            sum-=nums[start];
            start++
        }
        if (k===end-start+1) {
            answer = Math.max(answer, sum/k);
        }
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario the array is always fully traversed
from the for loop
Space Complexity: O(1); no additional space was used only contstant space
*/