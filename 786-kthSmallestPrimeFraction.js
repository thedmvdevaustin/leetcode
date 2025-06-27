// You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.

// For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].

// Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

 

// Example 1:

// Input: arr = [1,2,3,5], k = 3
// Output: [2,5]
// Explanation: The fractions to be considered in sorted order are:
// 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
// The third fraction is 2/5.
// Example 2:

// Input: arr = [1,7], k = 1
// Output: [1,7]
 

// Constraints:

// 2 <= arr.length <= 1000
// 1 <= arr[i] <= 3 * 104
// arr[0] == 1
// arr[i] is a prime number for i > 0.
// All the numbers of arr are unique and sorted in strictly increasing order.
// 1 <= k <= arr.length * (arr.length - 1) / 2
 

// Follow up: Can you solve the problem with better than O(n2) complexity?

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let minHeap = new MinHeap();
    let visited = new Set();
    minHeap.queue([arr[0]/arr[arr.length-1], 0, arr.length-1]);
    visited.add(`${0},${arr.length-1}`);
    let element, i, j;
    while (minHeap.size()) {
        [ element, i, j ] = minHeap.dequeue();
        k--;
        if (!k) break;
        if (i+1 < j && !visited.has(`${i+1},${j}`)) {
            minHeap.queue([arr[i+1]/arr[j], i+1, j]);
            visited.add(`${i+1},${j}`);
        }
        if (j-1 > i && !visited.has(`${i},${j-1}`)) {
            minHeap.queue([arr[i]/arr[j-1], i, j-1]);
            visited.add(`${i},${j-1}`);
        }
    }
    return [arr[i], arr[j]];
};

class MinHeap {
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
            let parentIndex = Math.floor(index/2);
            let parentElement = this.heap[parentIndex];
            if (element[0] >= parentElement[0]) break;
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
            let leftChildIndex = 2*index, rightChildIndex = 2*index+1;
            let leftChildElement, rightChildElement;
            let swap = null;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement[0] < element[0]) {
                    swap = leftChildIndex;
                }
                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && rightChildElement[0] < element[0]) || (swap!==null && rightChildElement[0] < leftChildElement[0])) {
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
Time Complexity: O(k log k); we are performing the while loop atleast k times
and during each k we are queueing and dequeueing which are both separate
log k operations
Space Complexity: O(k); 
*/