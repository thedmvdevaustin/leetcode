// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// Example 1:

// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
// Example 2:

// Input: [-1, 4, 2, 1, 3], target=5 
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: 
// [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
// Constraints:

// n == arr.length
// 0 <= n <= 3500
// -100 <= arr[i] <= 100
// -100 <= target <= 100

function searchTriplets(arr, target) {
    if (arr.length < 3) return 0;
    arr = arr.sort((a,b) => a-b);
    let answer = 0;
    for (let i = 0; i < arr.length-2; i++) {
        let start = i+1, end = arr.length - 1;
        while (start < end) {
            if (arr[i]+arr[start]+arr[end] < target) {
                answer = answer+(end-start);
                start++;
            } else {
                end--;
            }
        }
    }
    return answer;
}

/*
Time Complexity: O(n^2); we are traversing the entire array and each iteration
we are traversing the entire array again which simplifies down to O(n^2);
Space Complexity: O(1); no additional space is needed;
*/