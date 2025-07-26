// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let answer = [], i = 0;
    while (i < nums.length) {
        if (nums[nums[i]-1]===nums[i] && nums[i]!==i+1) {
            i++;
        } else if (nums[i]!==i+1) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        } else {
            i++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!==i+1) answer.push(nums[i]);
    }
    return answer;
};

/*
Time Complexity: O(N) the first loop at worst case takes 2n-1 iterations 
which simplifies down to O(n) and the second loop takes O(n) since it just
traverses the entire array. these loops arent't nested so they are added
together which simplifies down to O(n);
Space Complexity: O(1); no additonal space is needed(except for the solution)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const map = new Map()
    const result = []

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else [
            map.set(nums[i], 1)
        ]
    }

    for (let [key, value] of map) {
        if (value >= 2) {
            result.push(key)
        }
    }

    return result
}; 


/*
Time Complexity: O(N) the first loop at worst case takes 2n-1 iterations 
which simplifies down to O(n) and the second loop takes O(n) since it just
traverses the entire array. these loops arent't nested so they are added
together which simplifies down to O(n);
Space Complexity: O(1); no additonal space is needed(except for the solution)
*/