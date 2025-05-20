// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let set = new Set();
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[start]);
            start++
        }
        set.add(s[end]);
        longest = Math.max(longest, end-start+1);
    }
    return longest;
};

/*
Time Complexity: O(N); worst case the while loop that is activated inside the 
for loop doesn't take N time to complete every iteration so it is simplified
down to constant time;
Space Complexity: O(N); worst case scenario the set will be filled with all 
of the elements in the array making it O(N);
*/