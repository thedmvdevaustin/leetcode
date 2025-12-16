// Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

//     The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.
    
//     Return the number of remaining intervals.
    
     
    
//     Example 1:
    
//     Input: intervals = [[1,4],[3,6],[2,8]]
//     Output: 2
//     Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
//     Example 2:
    
//     Input: intervals = [[1,4],[2,3]]
//     Output: 1
     
    
//     Constraints:
    
//     1 <= intervals.length <= 1000
//     intervals[i].length == 2
//     0 <= li < ri <= 105
//     All the given intervals are unique.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals = intervals.sort((a,b) => a[0]-b[0])
    let length = intervals.length, i = 0, j = i+1; 
    while (j < intervals.length) {
        if (intervals[i][0]===intervals[j][0]) {
            length--;
            if (intervals[i][1] >= intervals[j][1]) {
                j++;
            } else {
                i=j;
                j=i+1;
            }
        }
        else if (intervals[i][1] >= intervals[j][1]) {
            length--;
            j++;
        } else {
            i=j;
            j=i+1;
        }
    }
    return length;
};

/*
Time Complexity: O(N log N); sorting takes n log n; the while loop will take O(N) at most 
which simplifies down to O(N log N);
Space Complexity: O(N log N) or O(1); usually the sorting algorithm is merge sort which takes N log N
stack space for the recursion; if space isn't counted from the sorting algorithm then constant
extra space is needed
*/