// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either 'A', 'C', 'G', or 'T'.

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length < 10) {
        return []
    }
    let answer = [];
    let obj = {};
    let start = 0;
    let end = 10;
    while (end-1 < s.length) {
        if (s.substring(start, end) in obj) {
            obj[s.substring(start, end)]++;
        } else {
            obj[s.substring(start, end)] = 1;
        }
        start++;
        end++;
    }
    for (let key in obj) {
        if (obj[key]>1) {
            answer.push(key)
        }
    }
    return answer
};

/*
Time Complexity: O(N); worst case scenario I'm still looping through
most of the list which simplifies down to O(N) in worst case scenario
Space Complexity: O(N); worst case scenario I'm creating an object with
close to most of the list substrings which simplifies down to O(N) extra
space
*/
