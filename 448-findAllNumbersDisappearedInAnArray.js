// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
 

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let answer = [], i = 0;
    while (i < nums.length) {
        if (nums[nums[i]-1]===nums[i]) {
            i++;
            continue;
        }
        let temp = nums[nums[i]-1];
        nums[nums[i]-1] = nums[i];
        nums[i] = temp;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i]!==i+1 ? answer.push(i+1) : 0;
    }
    return answer;
};
/*
Time Complexity: O(n); worst case we are doing 2 separate traversals through
the array of nums which simplifies down to O(n) time;
Space complexity: O(1) no additional space is needed
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let answer = [], i = 0;
    while (i < nums.length) {
        if (nums[i]!==i+1) {
            if (nums[i]===nums[nums[i]-1]) {
                i++;
            } else {
                let temp = nums[nums[i]-1];
                nums[nums[i]-1] = nums[i];
                nums[i] = temp
            }
        } else {
            i++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!==i+1) {
            answer.push(i+1);
        }
    }
    return answer;
};


/*
Time Complexity: O(n); worst case we are doing 2 separate traversals through
the array of nums which simplifies down to O(n) time;
Space complexity: O(1) no additional space is needed
*/
