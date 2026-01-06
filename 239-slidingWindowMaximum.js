// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let deque = [], answer = [];
    for (let end = 0; end < nums.length; end++) {
        while (deque.length && deque[0] === end-k) {
            deque.shift()
        }
        while (deque.length && nums[deque[deque.length-1]] <= nums[end]) {
            deque.pop()
        }
        deque.push(end);
        if (end >= k-1) {
            answer.push(nums[deque[0]]);
        }
    }
    return answer;
};

/*
Time Complexity: O(N); even though we are using an array and using the shift method(a O(N) method
inside a O(N) for loop in other languages there is a built in deque that allows you to perform
a pop method on the front of a queue but since js doesn't have a built in one we use an array instead)
with the shift method being an O(1) operation like it would in a deque(double ended queue) the 
complexity simplifies down to an O(N) algorithm
Space complexity: O(1); given that we aren't talking about the space used for the solution array
if so it is O(N) worst case scenario since k==n worst case 

*/