/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        while (!/^[a-zA-Z0-9]$/.test(s[start]) && start < end){
            start++
        }
        while (!/^[a-zA-Z0-9]$/.test(s[end]) && start < end){
            end--;
        }
        if (s[start].toLowerCase()!==s[end].toLowerCase()){
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true
};

// TIME COMPLEXITY: O(N)
