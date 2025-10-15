// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

// Example 1:


// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 

// Constraints:

// 1 <= k <= points.length <= 104
// -104 <= xi, yi <= 104

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxHeap = new MyMaxHeap(), answer = [];
    for (let i = 0; i < points.length; i++) {
        maxHeap.add(points[i]);
        if (maxHeap.size() > k) {
            maxHeap.delete()
        }
    }
    while (maxHeap.size()) {
        answer.push(maxHeap.delete())
    }
    return answer;
};

class MyMaxHeap {
    constructor() {
        this.heap = [null]
    }
    //size, peek, add, delete
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
            let parentIndex = Math.floor(index/2), parentElement = this.heap[parentIndex];
            if (this.getValue(element) <= this.getValue(parentElement)) break;
            this.heap[index] = parentElement;
            index = parentIndex;
        }
        this.heap[index] = element;
        return;
    }

    delete() {
        if (this.size()===1) return this.heap.pop()
        const root = this.peek();
        this.heap[1] = this.heap.pop();
        let index = 1, element = this.heap[index];
        while (true) {
            let leftChildIndex = index*2, rightChildIndex = index*2+1;
            let leftChildElement, rightChildElement;
            let swap = null;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (this.getValue(leftChildElement) > this.getValue(element)) {
                    swap = leftChildIndex
                }
                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && this.getValue(rightChildElement) > this.getValue(element)) || (swap!==null && this.getValue(rightChildElement) > this.getValue(leftChildElement))) {
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

    getValue(point) {
        return Math.sqrt((0-point[0])**2 + (0-point[1])**2)
    }
}

/*
Time Complexity: O(N log k); in the first for loop we are loopint through the entire array(O(N))
and performing a O(log k) operation each iteration (sometimes 2 log k operations which is 
O(logk) + O(logk) which simplifies down to O(log k)) so this simplifies down to O(n log k);
Space Complexity: O(log k); worst case scenario we only have O(log k + 1) elements inside of the 
heap at once which results in O(log k);
*/