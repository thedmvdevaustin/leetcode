// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

 

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let map = {}, maxHeap = new MyMaxHeap(), answer = "";
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    for (let key in map) {
        maxHeap.queue([key, map[key]]);
    }
    let prev = [null, null];
    while (maxHeap.size()) {
        let current = maxHeap.dequeue();
        answer+=current[0];
        current[1]--;
        if (prev[0] && prev[1] > 0) {
            maxHeap.queue(prev)
        }
        prev = current;
    }
    return answer.length===s.length ? answer : "";
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

    queue(value) {
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

    dequeue() {
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
Time Complexity: O(N); we have 3 loops in total, the first loop takes O(N) since it loops 
through the entire string and performs constant operations the second loop takes O(N) 
since it loops through the obj and adds every key in the obj to a heap (worst case every 
element is distinct so it will beO(N)) then the last loop will continue at worst case scenario 
for every value that was stored inside the map which is O(N) at worst case so the total 
complexity if O(N+N+N) which simplifies down to O(N);
Space Complexity: O(N); all distinct elements will be stored in the map which simplifies down to
O(N) at worst case scenario and all those elements will be stored in the heap at once also which
simplifiesd down to O(N);
*/