// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let output = Array(nums.length).fill(0)
    let first = 0, last = nums.length - 1, i = nums.length - 1;
    while (first <= last) {
        if (nums[first]**2 > nums[last]**2) {
            output[i] = nums[first]**2;
            first++;
        } else {
            output[i] = nums[last]**2;
            last--;
        }
        i--;
    }
    return output;
};

/*
The brute force method is looping through and getting all the squares then
sorting it but that would make the time complexity O(n log n) for the sorting
Time Complexity: O(n); worst case scenario we only have to loop through the 
array nums/2 times which simplifies down to n;
Space Complexity: O(n); we have to create an array of nums size to store
the answer in
*/