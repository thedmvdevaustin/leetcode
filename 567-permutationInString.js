// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    let s1Array = new Array(26).fill(0);
    let s2Array = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Array[s1.charCodeAt(i) - 97]++;
        s2Array[s2.charCodeAt(i) - 97]++;
    }

    if (s1Array.toString()===s2Array.toString()) {
        return true;
    }

    for (let right = s1.length; right < s2.length; right++) {
        s2Array[s2.charCodeAt(right) - 97]++;
        s2Array[s2.charCodeAt(right - s1.length) - 97]--;
        if (s1Array.toString()===s2Array.toString()) {
            return true;
        }
    }
    return false;
    
};

/*
Time Complexity: O(N) the loop through the first for loop is the size of s1
and the loop through the second for loop is the size of s2; no nested loops are here
and only constant complexities inside the for loops which means we add the 2 O(N)
loops which simplifies down to O(N)
Space Complexity: O(1) only constant space is used
*/