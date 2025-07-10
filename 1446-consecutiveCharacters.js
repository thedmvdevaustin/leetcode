// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let left = 0, answer = 0, max = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right]===s[left]) {
            max++;
        } else {
            max = 1;
            left = right;
        }
        answer = Math.max(max, answer);
    }
    return answer
};

/*
Time Complexity: O(N); we traverse through the entire array performing constant
operations which will simplify down to O(N);
Space Complexity: O(1); no additional space is needed;
*/