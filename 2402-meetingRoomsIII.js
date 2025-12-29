// You are given an integer n. There are n rooms numbered from 0 to n - 1.

// You are given a 2D integer array meetings where meetings[i] = [starti, endi] means that a meeting will be held during the half-closed time interval [starti, endi). All the values of starti are unique.

// Meetings are allocated to rooms in the following manner:

// Each meeting will take place in the unused room with the lowest number.
// If there are no available rooms, the meeting will be delayed until a room becomes free. The delayed meeting should have the same duration as the original meeting.
// When a room becomes unused, meetings that have an earlier original start time should be given the room.
// Return the number of the room that held the most meetings. If there are multiple rooms, return the room with the lowest number.

// A half-closed interval [a, b) is the interval between a and b including a and not including b.

 

// Example 1:

// Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
// Output: 0
// Explanation:
// - At time 0, both rooms are not being used. The first meeting starts in room 0.
// - At time 1, only room 1 is not being used. The second meeting starts in room 1.
// - At time 2, both rooms are being used. The third meeting is delayed.
// - At time 3, both rooms are being used. The fourth meeting is delayed.
// - At time 5, the meeting in room 1 finishes. The third meeting starts in room 1 for the time period [5,10).
// - At time 10, the meetings in both rooms finish. The fourth meeting starts in room 0 for the time period [10,11).
// Both rooms 0 and 1 held 2 meetings, so we return 0. 
// Example 2:

// Input: n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]
// Output: 1
// Explanation:
// - At time 1, all three rooms are not being used. The first meeting starts in room 0.
// - At time 2, rooms 1 and 2 are not being used. The second meeting starts in room 1.
// - At time 3, only room 2 is not being used. The third meeting starts in room 2.
// - At time 4, all three rooms are being used. The fourth meeting is delayed.
// - At time 5, the meeting in room 2 finishes. The fourth meeting starts in room 2 for the time period [5,10).
// - At time 6, all three rooms are being used. The fifth meeting is delayed.
// - At time 10, the meetings in rooms 1 and 2 finish. The fifth meeting starts in room 1 for the time period [10,12).
// Room 0 held 1 meeting while rooms 1 and 2 each held 2 meetings, so we return 1. 
 

// Constraints:

// 1 <= n <= 100
// 1 <= meetings.length <= 105
// meetings[i].length == 2
// 0 <= starti < endi <= 5 * 105
// All the values of starti are unique.

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