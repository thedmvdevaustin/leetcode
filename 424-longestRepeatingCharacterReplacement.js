// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    //if num of unique elements is > substring.length-k
    let max = 0;
    let answer = 0;
    let start = 0;
    let map = {};
    for (let end = 0; end < s.length; end++){
        if (map[s[end]]){
            map[s[end]]++;
        } else {
            map[s[end]] = 1;
        }
        max = Math.max(max, map[s[end]]);
        if (end-start+1-max<=k) {
            answer = Math.max(answer, end-start+1);
        } else {
            while (end-start+1-max>k) {
                map[s[start]]--;
                start++;
                max = Math.max(...Object.values(map));
            }
        }
    }
    return answer;
};

/*
Time Complexity: O(N); during the traversal of the string we only don't have
to slide the window all through the array every iteration so it only takes
O(N) time
Space Complexity: O(K): additional space with be K size in the worst case
which is the size of the substring we are on if they are all unique elements
which can be up to O(N) in the worst case scenario
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let answer = 0, max = 0, left = 0, map = {};
    for (let right = 0; right < s.length; right++) {
        map[s[right]] ? map[s[right]]++ : map[s[right]] = 1;
        max = Math.max(max, map[s[right]]);
        while (right - left + 1 - max > k) {
            map[s[left]]===1 ? delete map[s[left]] : map[s[left]]--;
            left++
        }
        answer = Math.max(answer, right - left + 1);
    }
    return answer
};

/*
Time Complexity: O(N): since the while loop isn't traversing through the 
entire array every iteration the complexity will simplify down to O(N)
Space Complexity: O(substring); worst case scenario we only have to save 
the size of the substring we are currently on
*/