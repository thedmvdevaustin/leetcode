// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i]==='[' || s[i]==='(' || s[i]==='{') {
            stack.push(s[i]);
        } else {
            if ((s[i]===')' && stack[stack.length-1]!=='(') || (s[i]===']' && stack[stack.length-1]!=='[') || (s[i]==='}' && stack[stack.length-1]!=='{')) {
                return false;
            } else {
                stack.pop()
            }
        }
    }
    return stack.length ? false : true
};

/*
Time Complexity: O(n);
Space complexity: O(n); worst case scenario we fill up the stack with all of s
and never pop anything out
*/