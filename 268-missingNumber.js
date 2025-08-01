// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 
 

 

 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0; 
    while (i < nums.length) {
        if (i===nums[i] || nums[i]===nums.length) {
            i++;
            continue
        } else {
            let temp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = temp
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i!==nums[i]) return i;
    }
    return nums.length
};

/*
Time Complexity: O(n) the while loop simplifies down to O(n) and the for loop
after isn't nested so it is added to the while loops complexity which would
ultimately simplify down to O(n) for the entire algorithm
Space Complexity: O(1);
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] < nums.length && nums[i]!==i) {
            let temp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = temp;
            continue;
        }
        i++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!==i) return i
    }
    return nums.length;
};

/*
Time Complexity: O(n); worst case scenario the while loop traverses through the 
array with 2n iterations at worst which simplifies down to O(N) and since
the for loop traverses the array again with constant operations so it is
simplified down to O(N) also and isn't nested it is added to the solution
is O(N);
Space Complexity: O(1); no additional space is needed
*/ 