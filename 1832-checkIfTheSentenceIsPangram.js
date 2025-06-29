// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alphaSet = new Set();
    for (let i = 0; i < 26; i++) {
        alphaSet.add(String.fromCharCode('a'.codePointAt(0)+i))
    }
    for (let i = 0; i < sentence.length; i++) {
        alphaSet.delete(sentence[i]);
    }
    return alphaSet.size ? false : true;
};

/*
Time Complexity: O(n); the first loop will always go to 26 so this reduces
to constant time and the second loop goes for the length of the array
Space Complexity: O(alphaSet); this will always be 26 since thats how many
letters we have in the alphabet 
*/