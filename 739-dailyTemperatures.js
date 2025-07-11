// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [], answer = Array(temperatures.length).fill(0)
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length && temperatures[i] >= stack[stack.length - 1][0]) {
            stack.pop();
        }
        if (stack.length) answer[i] = stack[stack.length-1][1] - i;
        stack.push([temperatures[i], i])
    }
    return answer;
};

/*
Time Complexity: O(N) while traversing through the array the while loop inside
will not activate every iteration and when activated won't take O(N) time to complete;
worse case scenario we have 2n iterations which simplifies down to O(N);
Space Complexity: O(N) worst case scenario we push everything to the stack
and the stack is filled with every element in the array
*/
