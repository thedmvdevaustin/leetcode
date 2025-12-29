// There is a party where n friends numbered from 0 to n - 1 are attending. There is an infinite number of chairs in this party that are numbered from 0 to infinity. When a friend arrives at the party, they sit on the unoccupied chair with the smallest number.

// For example, if chairs 0, 1, and 5 are occupied when a friend comes, they will sit on chair number 2.
// When a friend leaves the party, their chair becomes unoccupied at the moment they leave. If another friend arrives at that same moment, they can sit in that chair.

// You are given a 0-indexed 2D integer array times where times[i] = [arrivali, leavingi], indicating the arrival and leaving times of the ith friend respectively, and an integer targetFriend. All arrival times are distinct.

// Return the chair number that the friend numbered targetFriend will sit on.

 

// Example 1:

// Input: times = [[1,4],[2,3],[4,6]], targetFriend = 1
// Output: 1
// Explanation: 
// - Friend 0 arrives at time 1 and sits on chair 0.
// - Friend 1 arrives at time 2 and sits on chair 1.
// - Friend 1 leaves at time 3 and chair 1 becomes empty.
// - Friend 0 leaves at time 4 and chair 0 becomes empty.
// - Friend 2 arrives at time 4 and sits on chair 0.
// Since friend 1 sat on chair 1, we return 1.
// Example 2:

// Input: times = [[3,10],[1,5],[2,6]], targetFriend = 0
// Output: 2
// Explanation: 
// - Friend 1 arrives at time 1 and sits on chair 0.
// - Friend 2 arrives at time 2 and sits on chair 1.
// - Friend 0 arrives at time 3 and sits on chair 2.
// - Friend 1 leaves at time 5 and chair 0 becomes empty.
// - Friend 2 leaves at time 6 and chair 1 becomes empty.
// - Friend 0 leaves at time 10 and chair 2 becomes empty.
// Since friend 0 sat on chair 2, we return 2.
 

// Constraints:

// n == times.length
// 2 <= n <= 104
// times[i].length == 2
// 1 <= arrivali < leavingi <= 105
// 0 <= targetFriend <= n - 1
// Each arrivali time is distinct.

/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    let startHeap = new MyMinHeap(); endHeap = new MyMinHeap(), availableChairHeap = new MyMinHeap();
    for (let i = 0; i < times.length; i++) {
        startHeap.queue([times[i][0], times[i][1], i]);
        availableChairHeap.queue([i, -1, -1])
    }
    while (startHeap.size()) {
        let [startTime, endTime, friendNumber] = startHeap.dequeue();
        while (endHeap.size() && startTime >= endHeap.peek()[0]) {
            let [endTime, chairNumber, friendNumber] = endHeap.dequeue();
            availableChairHeap.queue([chairNumber, -1, -1]);
        }
        let [chairNumber, _, _a] = availableChairHeap.dequeue();
        if (friendNumber===targetFriend) return chairNumber;
        endHeap.queue([endTime, chairNumber, friendNumber]);
    }
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
        return this.heap[1]
    }
    queue(value) {
        this.heap.push(value);
        let index = this.size(), element = this.heap[index];
        while (index > 1) {
            let parentIndex = Math.floor(index/2), parentElement = this.heap[parentIndex];
            if ((element[0] > parentElement[0]) || (element[0]===parentElement[0] && element[1] > parentElement[1])) break;
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
            let lci = index*2, rci = index*2+1, swap = null;
            let lce, rce;
            if (lci <= this.size()) {
                lce = this.heap[lci];
                if ((lce[0] < element[0]) || (lce[0]===element[0] && lce[1] < element[1])) {
                    swap = lci;
                }
                if (rci <= this.size()) {
                    rce = this.heap[rci];
                    if ((swap===null && (rce[0] < element[0]) || (rce[0]===element[0] && rce[1] < element[1])) || (swap!==null && (rce[0] < lce[0]) || (rce[0]===lce[0] && rce[1] < lce[1]))) {
                        swap = rci;
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
Time Complexity: O(N log N) at worst case scenario the while loop is performing a log n operation
for every element inside of the times array which simplifies down to N log N;
Space Complexity: O(N); worst case scenario all heaps are holding O(N) elements at most; when
added together and simplified comes down to O(N);
*/