// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

 

// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!stack.length || s[i]!==stack[stack.length - 1]) {
            stack.push(s[i])
        } else {
            stack.pop()
        }

    }
    return stack.join("");
};

/*
Time Complexity: O(N); worst case we are traversing the array and performing
constant O(1) operations inside each iteration which simplifies down to 
O(N);
Space Complexity: O(N); worst case we have to add the entire string to the 
stack if there are no duplicates 
*/