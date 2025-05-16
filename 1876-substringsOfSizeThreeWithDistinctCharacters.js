// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".
// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
 

// Constraints:

// 1 <= s.length <= 100
// s​​​​​​ consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let set = new Set();
    let start = 0;
    let answer = 0;
    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])){
            set.delete(s[start]);
            start++
        }
        set.add(s[end])
        if (3===end-start+1) {
            answer++;
            set.delete(s[start]);
            start++;
        }
    }
    return answer;
};

/*
Time Complexity: O(N); end has to go through the entire string inside the for loop
for this to work; Since the while loop inside at worst case will run 3 times (constant
time) it does not effect the time complexity;
Space Complexity: O(1); at most the additional space will be a set of 
3 elements which reduces down to constant space;
*/