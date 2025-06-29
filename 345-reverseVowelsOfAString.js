// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split("");
    let alpha = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let start = 0, end = s.length - 1;
    while (start < end) {
        while (start < end && !alpha.has(s[start])) {
            start++
        }
        while (start < end && !alpha.has(s[end])) {
            end--
        }
        if (start >= end) break;
        [ s[start], s[end] ] = [ s[end], s[start] ];
        start++;
        end--;
    }
    return s.join("")
};

/*
Time Complexity: O(n); worst case scenario we will have to traverse the entire
string, average case we will traverse half the string which is O(n/2) will still 
simplify down to O(n);
Space Complexity: O(alpha); extra space for the set that has our vowels in it
*/