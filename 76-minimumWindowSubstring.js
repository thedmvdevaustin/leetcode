// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let tMap = {}, start = 0, answer = "", answerLen = s.length + 1;
    for (let i = 0; i < t.length; i++) {
        tMap[t[i]] ? tMap[t[i]]++ : tMap[t[i]] = 1;
    }
    let tMapValues = t.length;
    for (let end = 0; end < s.length; end++) {
        if (tMap[s[end]] >= 1) {
            tMapValues--;
        }
        tMap[s[end]]!==null ? tMap[s[end]]-- : 0;
        while (!tMapValues) {
            if (end - start + 1 < answerLen) {
                answer = s.substring(start, end+1);
                answerLen = end - start + 1;
            }
            tMap[s[start]]!==null ? tMap[s[start]]++ : 0;
            if (tMap[s[start]] > 0) tMapValues++;
            start++;
        }
    }
    return answer;
};

/*
Time Complexity: O(N+M); worst case scenario we have to loop through both strings and perform
constant operations to each;
Space Complexity: O(M); worst case scenario we have to store the length of the second string(M)
inside of an object
*/