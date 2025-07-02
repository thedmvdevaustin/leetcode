// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] < 1 || nums[i] > nums.length) {
            i++;
            continue;
        } else if (nums[nums[i] - 1]!==nums[i]) {
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        } else {
            i++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!==i+1) return i+1;
    }
    return nums.length+1;
};

/*
Time Complexity: O(N) the first loop at worst case takes 2n-1 iterations 
which simplifies down to O(n) and the second loop takes O(n) since it just
traverses the entire array. these loops arent't nested so they are added
together which simplifies down to O(n);
Space Complexity: O(1); no additonal space is needed
*/