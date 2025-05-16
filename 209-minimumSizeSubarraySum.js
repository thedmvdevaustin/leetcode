// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let answer = nums.length + 1;
    let start = 0;
    let sum = 0;
    for (let end = 0; end < nums.length; end++) {
        sum+=nums[end];
        while (sum >= target) {
            answer = Math.min(answer, end-start+1);
            sum-=nums[start];
            start++;
        }
    }
    return answer===nums.length+1 ? 0 : answer;
};

/*
Time Complexity: O(N); traversing the entire for loop is O(N);
the while loop will only be traversed in the worst case constant time 
inside the for loop so it is reduced to constant time therefore not 
increasing out time complexity
Space Complexity: O(1); no extra space is needed
*/