// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3
 

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

// Follow up:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0]; 
    let fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]]
    } while (slow!==fast);
    slow = nums[0];
    while (slow!==fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast
};

/*
This is the Slow fast pointer(or tortoise and hair) pattern solution
Time Complexity: O(N); worst case scenario, to find the cycle takes the amount 
of time it takes to scan the array
Space complexity: O(1); no additional space is needed
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[nums[i]-1]===nums[i] && nums[i]!==i+1) {
            return nums[i]
        } else if (nums[i]!==i+1) {
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        } else {
            i++;
        }
    }
};

/*
This is the cyclic sort pattern solution; though it works this shouldn't
be used because the problem asks to not modify the array and this solution
modifies the array
Time Complexity: O(N); at worst case the amount of times we traverse the 
array is 2n-1 which simplifies down to O(n);
Space complexity: O(1); no additional space is needed
*/