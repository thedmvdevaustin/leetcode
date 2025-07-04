// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n===1) {
        return true;
    }
    let slow = n;
    let fast = n;
    do {
        slow = nextNumber(slow);
        fast = nextNumber(nextNumber(fast));
        if (fast===1) {
            return true
        }
    } while (slow!==fast)

    function nextNumber(num) {
        let answer = 0
        while (num > 0) {
            answer = answer + (num%10)**2;
            num = Math.floor(num/10);
        }
        return answer;
    }

    return false
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function nextHappy(num) {
        let total = 0
        while (num) {
            total = total + (num%10)**2;
            num = Math.floor(num/10);
        }
        return total;
    }
    let slow = n;
    let fast = n;
    while (fast!==1) {
        slow = nextHappy(slow);
        fast = nextHappy(nextHappy(fast));
        if (fast===1) return true;
        if (slow===fast) return false;
    }
    return true;
};


/*
Time Complexity: O(1); we aren't looping through a dataset or from 0 to
n so the complexity has to be constant;
Space Complexity: O(1); no extra space needed
*/