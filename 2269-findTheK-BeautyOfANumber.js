// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let answer = 0;
    let start = 0;
    let end = start+k-1;
    let string = num.toString();
    while (end <string.length) {
        if (num % Number(string.substring(start, end + 1))===0) {
            answer++;
        }
        start++;
        end++;
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario traversal takes place n-k+1 times(could be wrong)
which simplifies down to O(N)
Space Complexity: O(N); changing the num to a string of the size of num
creates an additional N space
*/