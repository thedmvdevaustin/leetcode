// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

 

// Example 1:


// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
// Example 2:

// Input: firstList = [[1,3],[5,9]], secondList = []
// Output: []
 

// Constraints:

// 0 <= firstList.length, secondList.length <= 1000
// firstList.length + secondList.length >= 1
// 0 <= starti < endi <= 109
// endi < starti+1
// 0 <= startj < endj <= 109 
// endj < startj+1

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let answer = [], i = 0, j = 0;
    while (i < firstList.length && j < secondList.length) {
        if (i < firstList.length && j < secondList.length && firstList[i][1] < secondList[j][0]) {
            i++;
            continue;
        }
        if (i < firstList.length && j < secondList.length && secondList[j][1] < firstList[i][0]) {
            j++;
            continue;
        }
        if (i < firstList.length && j < secondList.length) {
        answer.push([Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])]);
        } else {
            break;
        }
        if (answer[answer.length - 1][1]===firstList[i][1]) {
            i++;
        } else {
            j++;
        }
    }
    return answer;
};

/*
Time Complexity: O(N+M); we are traversing the entire list of either N or M;
worst case scenario we traverse the entire of both list and perform 
constant operations each iterations which simplifies down to O(N+M);
Space Complexity: O(1); no additional space needed other than the space 
for the answer array;
*/

// SECOND SOLUTION 

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let answer = [], i = 0, j = 0;
    while (i < firstList.length && j < secondList.length) {
        if (firstList[i][1] < secondList[j][0]) {
            i++;
        } else if (firstList[i][0] > secondList[j][1]) {
            j++;
        } else {
            answer.push([Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])]);
            firstList[i][1] > secondList[j][1] ? j++ : i++;
        }
    }
    return answer;
};

/*
Time Complexity: O(M+N); worst case scenario we have to iterate through the entire length of 
N and M which simplifies down to O(M+N); where M and N are the lengths of the 2 list
Space complexity: O(1); no additional space is needed
*/