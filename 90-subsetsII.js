// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let answer = [], curSet = [];
    function backtrack(index) {
        if (index === nums.length) {
            answer.push([...curSet]);
            return;
        }
        curSet.push(nums[index]);
        backtrack(index+1);
        curSet.pop();
        while (index < nums.length - 1 && nums[index]===nums[index+1]) {
            index++;
        }
        backtrack(index+1);
        return;
    }
    backtrack(0);
    return answer;
};

/*
Time Complexity: O(2^n);
Space Complexity: O(2^n);
*/