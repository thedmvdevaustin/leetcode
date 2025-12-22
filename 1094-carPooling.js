// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

 

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true
 

// Constraints:

// 1 <= trips.length <= 1000
// trips[i].length == 3
// 1 <= numPassengersi <= 100
// 0 <= fromi < toi <= 1000
// 1 <= capacity <= 105

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let array = Array.from({ length: 10001 }, () => 0)
    for(const [numPassengers, from, to] of trips) {
        array[from]+=numPassengers;
        array[to]-=numPassengers;
    }
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total+=array[i];
        if (total > capacity) return false;
    }
    return true;
};

/*
Time Complexity: O(N); creating the array and traversing the array will always be a constant
of 1000 so we consider that to be O(1) constant time which leaves the traversal of trips which
results in O(N);
Space Complexity: O(1); since the length of the created array is 1001 we still consider that 
to be a constant so the result is constant extra space;
*/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    trips = trips.sort((a,b) => a[1]-b[1]);
    let minHeap = new MyMinHeap();
    trips.forEach(x => {
        minHeap.queue([x[2], x[0]]);
    })
    for(const trip of trips) {
        while (minHeap.size() && minHeap.peek()[0] <= trip[1]) {
            capacity+=(minHeap.dequeue()[1]);
        }
        capacity-=trip[0];
        if (capacity < 0) return false
    }
    return true;
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
            let leftChildIndex = index*2, rightChildIndex = index*2+1, swap = null;
            let leftChildElement, rightChildElement;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement[0] < element[0]) {
                    swap = leftChildIndex;
                }
                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && rightChildElement[0] < element[0]) || (swap!==null && rightChildElement[0] < leftChildElement[0])) {
                        swap = rightChildIndex
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
Time Complexity: O(N log N); for the sorting, everything else is linear time
at max;
Space Complexity: O(N); worst case scenario there will be N items in our
created heap
*/