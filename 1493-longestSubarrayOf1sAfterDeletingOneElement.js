// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let answer = 0, numOfOnes = 0, left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right]) numOfOnes++;
        while (right - left + 1 - numOfOnes > 1) {
            if (nums[left]) numOfOnes--;
            left++;
        }
        answer = Math.max(answer, right - left);
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario since the while loop won't activate
every iteration and the while loop doesn't iterate the size of N, the 
complexity will simplify down to O(N);
Space Complexity: O(1); no additional space is needed
*/