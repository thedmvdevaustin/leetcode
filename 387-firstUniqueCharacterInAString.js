// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]===1) return i
    }
    return -1;
};

/*
Time Complexity: O(N); we perform 2 loops with constant operations in each of them which is
O(N+N) which simplifies down to O(N);
Space Complexity: O(N); we store all the unique characters inside of the hashmap which simplifes
down to O(N);
*/
