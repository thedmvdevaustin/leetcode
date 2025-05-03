/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (s.length===1 || s.trim().split(" ").length===1){
        return s.trim();
    }
    let array = s.trim().split(" ").filter(x => x!=="");
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        [ array[start], array[end] ] = [ array[end], array[start] ];
        start++;
        end--;
    }
    return array.join(" ");
};

/*
Time Complexity: O(N); in the line we initialize array, we are looping
through the entire string to split it by " " then looping through again
to filter it to everything but spaces. In the while loop we are looping 
through the half the array to swap places which is O(N/2) which evaluates
to O(N) in Big O notation
Space Complexity: O(N); because we have to create an array that can be 
the size of the input string worst case scenario 
*/