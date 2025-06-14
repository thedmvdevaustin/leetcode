// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

 

// Example 1:

// Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
// Example 2:

// Input: nums = [0]
// Output: 0
// Explanation: Each element in nums is already 0 so no operations are needed.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let answer = 0;
    let sum = nums.reduce((total, x) => total+=x, 0);
    while (sum) {
        sum = 0;
        nums = nums.sort((a,b) => a-b);
        let i = 0;
        let min;
        while (i < nums.length) {
            if (nums[i] > 0) {
                min = nums[i]
                break;
            }
            i++;
        }
        while (i < nums.length) {
            nums[i]-=min;
            sum+=nums[i];
            i++;
        }
        answer++;
    }
    return answer;
};

/*
Time Complexity: O(n log n); I am sorting ( O(n log n) ) and traversing(O(N) with the 2 while loops)
in one iteration but we add the complexities together because they are 
seperate from each other;
Space Complexity: O(1); no additional space needed (unless the built in 
    sorting methods needs space);
*/