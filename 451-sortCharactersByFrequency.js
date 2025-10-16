// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
 

// Constraints:

// 1 <= s.length <= 5 * 105
// s consists of uppercase and lowercase English letters and digits.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let maxHeap = new MyMaxHeap(), map = {}, answer = "";
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    for (const key in map) {
        maxHeap.add([key, map[key]]);
    }
    while (maxHeap.size()) {
        let temp = maxHeap.delete();
        answer+=`${temp[0]}`.repeat(temp[1]);
    }
    return answer;
};

class MyMaxHeap {
    constructor() {
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    peek() {
        return this.heap[1];
    }

    add(value) {
        this.heap.push(value);
        let index = this.size(), element = this.heap[index];
        while (index > 1) {
            let parentIndex = Math.floor(index / 2);
            let parentElement = this.heap[parentIndex];
            if (element[1] <= parentElement[1]) break;
            this.heap[index] = parentElement;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    delete() {
        if (this.size()===1) return this.heap.pop();
        const root = this.peek();
        this.heap[1] = this.heap.pop();
        let index = 1, element = this.heap[index];
        while (true) {
            let leftChildIndex = 2 * index, rightChildIndex = 2 * index + 1;
            let leftChildElement, rightChildElement;
            let swap = null;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement[1] > element[1]) {
                    swap = leftChildIndex
                }

                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && rightChildElement[1] > element[1]) || (swap!==null && rightChildElement[1] > leftChildElement[1])) {
                        swap = rightChildIndex;
                    }
                }
            }
            if (swap===null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
        return root;
    }
}

/*
Time Complexity: O(N log N); worst case scenario we have to traverse the array to put it in a 
hashmap(O(N)); then traverse the hashmap to put it in a heap (O(N log N)), then take all the
elements out of the heap and store it into a string (O(N log N)); so O(N + N log N + N log N) 
simplifies down to O(N log N)
Space Complexity: O(N); storing all the of elements inside the heap and hashmap will be O(N);
worst case scenario when the input is all distinct characters 
*/