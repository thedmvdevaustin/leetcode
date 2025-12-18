// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

// Return the largest possible value of num after any number of swaps.

 

// Example 1:

// Input: num = 1234
// Output: 3412
// Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
// Swap the digit 2 with the digit 4, this results in the number 3412.
// Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
// Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.
// Example 2:

// Input: num = 65875
// Output: 87655
// Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.
// Swap the first digit 5 with the digit 7, this results in the number 87655.
// Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.
 

// Constraints:

// 1 <= num <= 109

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    if (num < 10) return num
    num = num.toString().split("")
    let oddHeap = new MyMaxHeap(), evenHeap = new MyMaxHeap();
    for(let char of num) {
        Number(char)%2===0 ? evenHeap.queue(char) : oddHeap.queue(char);
    }
    let i = 0;
    while (i < num.length && (evenHeap.size() || oddHeap.size())) {
        Number(num[i])%2===0 ? num[i] = evenHeap.dequeue() : num[i] = oddHeap.dequeue();
        i++; 
    }
    return Number(num.join(""))
};

class MyMaxHeap {
    constructor() {
        this.heap = [null];
    }
    //size, peek, queue, dequeue
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
            let parentIndex = Math.floor(index/2), parentElement = this.heap[parentIndex];
            if (element <= parentElement) break;
            this.heap[index] = parentElement;
            index = parentIndex;
        }
        this.heap[index] = element;
        return;
    }
    dequeue() {
        if (this.size()===1) return this.heap.pop();
        const root = this.peek();
        this.heap[1] = this.heap.pop();
        let index = 1, element = this.heap[index];
        while (true) {
            let leftChildIndex = index*2, rightChildIndex = index*2+1, swap = null;
            let leftChildElement, rightChildElement;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement > element) {
                    swap = leftChildIndex;
                }
                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && rightChildElement > element) || (swap!==null && rightChildElement > leftChildElement)) {
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
Time Complexity: O(N log N); for the putting all the numbers from the created array into the 
heap it takes n log n time to complete
Space Complexity: O(N); worst case scenario all numbers are odd or even so they would all be
inside of one heap which simplifies down to O(N);
*/