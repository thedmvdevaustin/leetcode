// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let arrayAlpha = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        let index = p.charCodeAt(i) - 97;
        console.log(index)
        arrayAlpha[index]++;
    }
    let answer = [];
    let start = 0; 
    for (let end = 0; end < s.length; end++) {
        arrayAlpha[s.charCodeAt(end) - 97]--;
        if (end-start+1===p.length) {
            if (Math.max(...arrayAlpha)===0) {
                answer.push(start);
            }
            arrayAlpha[s.charCodeAt(start) - 97]++
            start++;
        }
    }
    return answer;
};

/*
Time Complexity: O(N^2); the spread operator makes this a O(N^2) solution instead
of O(N)
Space Complexity: O(alpha); we only add an array of length 26 each time which
is the length of the alpha array
*/
