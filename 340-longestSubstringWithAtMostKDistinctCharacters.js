// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

// Example 1:

// Input: String="araaci", K=2  
// Output: 4  
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:

// Input: String="araaci", K=1  
// Output: 2  
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
// Example 3:

// Input: String="cbbebi", K=3  
// Output: 5

function longestSubstring(string, k) {
    let map = {}, left = 0, max = 0;
    for (let right = 0; right < string.length; right++) {
        map[string[right]] ? map[string[right]]++ : map[string[right]] = 1;
        while (Object.keys(map).length > k) {
            map[string[left]]===1 ? delete map[string[left]] : map[string[left]]--;
            left++;
        }
        max = Math.max(max, right-left+1);
    }
    return max;
}

/*
Time Complexity: O(n); since we are not activating the while loop inside 
the for loop every iteration the time complexity simplifies down to O(N);
even worst case scenario we get 2n traversals which simplifies down to 
O(N);
Space complexity: O(1); no additional space is needed
*/
