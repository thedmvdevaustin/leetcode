// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [], curComb = [];
    function backtrack(open, close) {
        if (curComb.length === n*2) {
            answer.push(curComb.join(""));
            return
        }

        if (open < n) {
            curComb.push('(');
            console.log(curComb, open, close)
            backtrack(open+1, close);
            curComb.pop()
        }
        if (open > close) {
            curComb.push(')');
            console.log(curComb, open, close)
            backtrack(open, close+1);
            curComb.pop()
        }
        return;
    }
    backtrack(0,0);
    return answer;
};

/*
Time Complexity: O(2^n);
Space Complexity: O(2^n)
*/