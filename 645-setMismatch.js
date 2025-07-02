// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[nums[i] -1]!==nums[i]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        } else {
            i++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!==i+1) return [nums[i], i+1]
    }
};

/*
Time Complexity: O(N); the first loop worst case scenario we iterate 
2n-1 times(n===nums.length) which simplifies down to O(N) and the second loop
we traverse n which simplifies down to O(N); since we aren't nesting the 
loops we only add them together which simplifes down to O(N);
Space Complexity: O(1) no additional space is needed
*/