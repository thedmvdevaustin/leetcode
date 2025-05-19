// Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.
 

// Example 1:

// Input: s = "bcbbbcba"

// Output: 4

// Explanation:

// The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".
// Example 2:

// Input: s = "aaaa"

// Output: 2

// Explanation:

// The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".
 

// Constraints:

// 2 <= s.length <= 100
// s consists only of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let longest = 0; 
    let start = 0;
    let map = {};
    for (let end = 0; end < s.length; end++) {
        if (map[s[end]]) {
            map[s[end]]++;
        } else {
            map[s[end]] = 1
        }
        if (map[s[end]] <= 2) {
            longest = Math.max(longest, end-start +1);
        } else {
            while (map[s[end]] > 2) {
                if (map[s[start]]===1) {
                    delete map[s[start]];
                } else {
                    map[s[start]]--;
                }
                start++;
            }
        }
    }
    return longest;
};

/*
Time Complexity: O(N); worst case we will loop the entire array once, 
even if the while loop is activated in the worst case scenario we won't
have to traverse the entire array for every iteration in the for loop
Space Complexity: O(N); worst case scenario we will need to fill up the 
object(being used as a hash map in the case) with the size of the array
which if O(N);
*/ 