// You are given a 0-indexed integer array nums of size n.

// Define two arrays leftSum and rightSum where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.

 

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        let leftSum = nums.slice(0, i).reduce((total, x) => total+=x,0);
        let rightSum = nums.slice(i+1, nums.length).reduce((total, x) => total+=x,0);
        console.log(leftSum, rightSum);
        answer.push(Math.abs(leftSum-rightSum));
    }
    return answer;
};

/*
Time Complexity: O(n^2) traversing through the entire array and for each
iteration im traversing the left and right of the index(which simplifies to
the entire array) to get the total;
Space Complexity: O(1);
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let answer = [];
    let leftSum = 0
    let rightSum = nums.reduce((total, x) => total+x,0);
    for (let i = 0; i < nums.length; i++) {
        if (i===0) {
            rightSum-=nums[i];
        } else {
            leftSum+=nums[i-1];
            rightSum-=nums[i];
        }
        answer.push(Math.abs(leftSum - rightSum))
    }
    return answer;
};

/*
Time Complexity: O(n); reduce takes O(N) and for loop take O(n) since 
they are separate operations and not nested inside each other we add them
which simplifies down to O(n);
Space Complexity: O(1); no additional space is neededs;
*/