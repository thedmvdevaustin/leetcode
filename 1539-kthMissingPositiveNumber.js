// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

 

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 

// Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000
// 1 <= k <= 1000
// arr[i] < arr[j] for 1 <= i < j <= arr.length
 

// Follow up:

// Could you solve this problem in less than O(n) complexity?

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let answer = 0, i = 1, s = new Set(arr);
    while (k) {
        if (!s.has(i)) {
            k--;
        }
        i++;
    }
    return i-1
};
//Not most efficient follow up is binary search solution
/*
Time Complexity: O(N+K); to change the array to a set takes O(N) Time and
the while loop will go until we reach k. Since they are done separately,
we add them together which will result in O(N+K);
Space Complexity: O(N); we need N additional space to change the array into
a hash set
*/