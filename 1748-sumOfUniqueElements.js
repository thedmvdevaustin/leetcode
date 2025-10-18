// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = {}, answer = 0;
    nums.forEach(x => map[x] ? map[x]++ : map[x] = 1);
    for (const key in map) {
        map[key]===1 ? answer+=Number(key) : 0
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we perform 2 separate loops that have constant 
operations to that will be O(N+N) which simplifies down to O(N);
Space Complexity: O(N); we have to store all unique elements inside of the hashmap which at
worst case scenario we will get all unique elements which simplifies down to O(N);
*/