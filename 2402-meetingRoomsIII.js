/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings = meetings.sort((a,b) => a[0]-b[0]);
    let endHeap = new MyMinHeap(), availableRoomsHeap = new MyMinHeap();
    let array = Array.from({ length: n }, () => 0), answer = 0;
    for (let i = 0; i < n; i++) availableRoomsHeap.queue([i, -1]);
    for (let i = 0; i < meetings.length; i++) {
        while (endHeap.size() && meetings[i][0] >= endHeap.peek()[0]) {
            let [endTime, roomNumber] = endHeap.dequeue();
            availableRoomsHeap.queue([roomNumber, -1]);
        }
        if (!availableRoomsHeap.size()) {
            let [endTime, roomNumber] = endHeap.dequeue();
            availableRoomsHeap.queue([roomNumber, -1]);
            meetings[i][1]+=(endTime-meetings[i][0]);
        }
        let [roomNumber, _] = availableRoomsHeap.dequeue();
        endHeap.queue([meetings[i][1], roomNumber]);
        array[roomNumber]++;
    }
    for (const [index, element] of array.entries()) {
        if (element > array[answer]) {
            answer = index;
        }
    }
    console.log(array)
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
Time Complexity: O(N log N + N log M); where N is the meetings length and M is the number of 
meeting rooms; NlogN for the sorting and N log M because of the for loop; inside the for loop
we are performing multiple log M operations at most(the total number of elements that can be in
both heaps at a time) which simplifies down to N log M added to
the sorting that takes place at the beginning;
Space Complexity: O(M); no including the space it takes for sorting, we only have to store 
a max of M(the number of meetings rooms defined be n) elements inside of the both heaps and 
the array which we add together and simplified comes down to O(M)
*/