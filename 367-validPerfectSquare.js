// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:

// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 

// Constraints:

// 1 <= num <= 231 - 1

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num===1) return true;
    let left = 2, right = Math.floor(num/2);
    while (left <= right) {
        let mid = Math.floor((left+right)/2), squared = mid*mid;
        if (squared===num) return true;
        if (squared < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};

/*
Time Complexity: O(log n); worst case scenario we will find the answer in
log n iterations;
Space Complexity: O(1); no additional space is needed
*/