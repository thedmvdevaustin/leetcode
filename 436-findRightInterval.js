// You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.

// The right interval for an interval i is an interval j such that startj >= endi and startj is minimized. Note that i may equal j.

// Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i.

 

// Example 1:

// Input: intervals = [[1,2]]
// Output: [-1]
// Explanation: There is only one interval in the collection, so it outputs -1.
// Example 2:

// Input: intervals = [[3,4],[2,3],[1,2]]
// Output: [-1,0,1]
// Explanation: There is no right interval for [3,4].
// The right interval for [2,3] is [3,4] since start0 = 3 is the smallest start that is >= end1 = 3.
// The right interval for [1,2] is [2,3] since start1 = 2 is the smallest start that is >= end2 = 2.
// Example 3:

// Input: intervals = [[1,4],[2,3],[3,4]]
// Output: [-1,2,-1]
// Explanation: There is no right interval for [1,4] and [3,4].
// The right interval for [2,3] is [3,4] since start2 = 3 is the smallest start that is >= end1 = 3.
 

// Constraints:

// 1 <= intervals.length <= 2 * 104
// intervals[i].length == 2
// -106 <= starti <= endi <= 106
// The start point of each interval is unique.

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let minHeapStart = new MyMinHeap(), minHeapEnd = new MyMinHeap(), answer = Array.from({ length: intervals.length}, () => -1);
    intervals.forEach((x,i) => {
        minHeapStart.queue([x[0], i])
        minHeapEnd.queue([x[1], i])
    })
    while (minHeapEnd.size()) {
        let [currentEnd, currentIndex] = minHeapEnd.dequeue();
        while (minHeapStart.size() && currentEnd > minHeapStart.peek()[0]) {
            minHeapStart.dequeue();
        }
        if (!minHeapStart.size()) break;
        answer[currentIndex] = minHeapStart.peek()[1];
    }
    return answer;
};

class MyMinHeap {
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
            if (element[0] >= parentElement[0]) break;
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
            let leftChildIndex = index*2, rightChildIndex = index *2 + 1, swap = null;
            let leftChildElement, rightChildElement;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement[0] < element[0]) {
                    swap = leftChildIndex
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
Time Complexity: O(N log N); worst case scenario putting the elements into the heap will take
O(N log N) to finish and the while loop after takes O(N) Time To Complete because every iteration
takes one element in the minHeapEnd which at worst case will be O(N) and the while loop inside
will take O(N) at worst case but since it doesn't occur every iteration it isn't multiplied together
Space Complexity: O(N) worst case scenario we have to store the number of intervals in the heap
2 separate times which simplifies down to O(N);
*/
