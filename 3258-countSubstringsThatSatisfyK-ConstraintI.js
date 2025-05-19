// You are given a binary string s and an integer k.

// A binary string satisfies the k-constraint if either of the following conditions holds:

// The number of 0's in the string is at most k.
// The number of 1's in the string is at most k.
// Return an integer denoting the number of substrings of s that satisfy the k-constraint.

 

// Example 1:

// Input: s = "10101", k = 1

// Output: 12

// Explanation:

// Every substring of s except the substrings "1010", "10101", and "0101" satisfies the k-constraint.

// Example 2:

// Input: s = "1010101", k = 2

// Output: 25

// Explanation:

// Every substring of s except the substrings with a length greater than 5 satisfies the k-constraint.

// Example 3:

// Input: s = "11111", k = 1

// Output: 15

// Explanation:

// All substrings of s satisfy the k-constraint.

 

// Constraints:

// 1 <= s.length <= 50 
// 1 <= k <= s.length
// s[i] is either '0' or '1'.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let answer = 0;
    let start = 0;
    let map = {};
    for (let end = 0; end < s.length; end++) {
        if (s[end] in map) {
            map[s[end]]++;
        } else {
            map[s[end]] = 1;
        }
        while (map[1] > k && map[0] > k) {
            if (map[s[start]]===1) {
                delete map[s[start]];
            } else {
                map[s[start]]--;
            }
            start++;
        }
        answer = answer + (end - start + 1);
    }
    return answer;
};

/*
Time Complexity: O(N); we have to traverse the entire array, the while 
loop shouldn't make the complexity N^2 because worst case scenario we 
won't have to traverse the entire array every iteration of the for loop
Space Complexity: O(1); worst case scenario our map object will only have
2 properties and alot of values for each property which isn't as long as
out input size in most scenarios
*/