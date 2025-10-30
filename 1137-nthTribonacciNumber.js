// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

 

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537
 

// Constraints:

// 0 <= n <= 37
// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n===0) return 0;
    if (n < 3) return 1;
    let first = 0, second = 1, third = 1, i = 2;
    let total;
    while (i < n) {
        total = first+second+third;
        first = second, second = third, third = total;
        i++;
    }
    return total
};

/*
Time Complexity: O(n); worst case scenario we will have to iterate through the loop n-2 times
which simplifies down to O(N);
Space Complexity: O(1); no additional space is needed
*/