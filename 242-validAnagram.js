// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]===1 ? delete map[t[i]] : map[t[i]]--;
        } else {
            return false;
        }
    }
    return Object.keys(map).length ? false : true;
};

/*
Time Complexity: O(n); 3 separate loops through each string so this simplifies
downs to O(n);
Space Complexity: O(n); adding the entire string of s to an object
*/