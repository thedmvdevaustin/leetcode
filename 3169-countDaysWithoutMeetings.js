// You are given a positive integer days representing the total number of days an employee is available for work (starting from day 1). You are also given a 2D array meetings of size n where, meetings[i] = [start_i, end_i] represents the starting and ending days of meeting i (inclusive).

// Return the count of days when the employee is available for work but no meetings are scheduled.

// Note: The meetings may overlap.

 

// Example 1:

// Input: days = 10, meetings = [[5,7],[1,3],[9,10]]

// Output: 2

// Explanation:

// There is no meeting scheduled on the 4th and 8th days.

// Example 2:

// Input: days = 5, meetings = [[2,4],[1,3]]

// Output: 1

// Explanation:

// There is no meeting scheduled on the 5th day.

// Example 3:

// Input: days = 6, meetings = [[1,6]]

// Output: 0

// Explanation:

// Meetings are scheduled for all working days.

 

// Constraints:

// 1 <= days <= 109
// 1 <= meetings.length <= 105
// meetings[i].length == 2
// 1 <= meetings[i][0] <= meetings[i][1] <= days

/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings = meetings.sort((a,b) => a[0]-b[0]);
    let result = [meetings[0]];
    for (let i = 1; i < meetings.length; i++) {
        if (meetings[i][0] <= result[result.length - 1][1]) {
            result[result.length-1][0] = Math.min(meetings[i][0], result[result.length-1][0])
            result[result.length-1][1] = Math.max(meetings[i][1], result[result.length-1][1])
        } else {
            result.push(meetings[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        days-=(result[i][1]-result[i][0]+1);
    }
    return days;
};

/*
Time Complexity: O(N log N); sorting takes N log N and the 2 for loops are O(N) both since 
we traverse the array and perform constant operations each iteration the second array is O(N)
because at worse case the result.length can be as big as the array passed in because we could
reach a scenario where we don't merge a single interval, so O(N log N) + O(N) + O(N)
simplifies down to O(N log N);
Space ComplexityL O(N); worst case scenario we don't merge any of the intervals and the result
is the length of the array passed in
*/
