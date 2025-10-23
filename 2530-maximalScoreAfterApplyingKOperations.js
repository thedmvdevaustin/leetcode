// You are given a 0-indexed integer array nums and an integer k. You have a starting score of 0.

// In one operation:

// choose an index i such that 0 <= i < nums.length,
// increase your score by nums[i], and
// replace nums[i] with ceil(nums[i] / 3).
// Return the maximum possible score you can attain after applying exactly k operations.

// The ceiling function ceil(val) is the least integer greater than or equal to val.

 

// Example 1:

// Input: nums = [10,10,10,10,10], k = 5
// Output: 50
// Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.
// Example 2:

// Input: nums = [1,10,3,3,3], k = 3
// Output: 17
// Explanation: You can do the following operations:
// Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
// Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
// Operation 3: Select i = 2, so nums becomes [1,2,1,3,3]. Your score increases by 3.
// The final score is 10 + 4 + 3 = 17.
 

// Constraints:

// 1 <= nums.length, k <= 105
// 1 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let maxHeap = new MyMaxHeap(), answer = 0;
    nums.forEach(x => maxHeap.queue(x));
    while (k) {
        let value = maxHeap.dequeue();
        answer+=value;
        maxHeap.queue(Math.ceil(value / 3));
        k--;
    }
    return answer;
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
        return this.heap[1]
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
            let leftChildIndex = index * 2, rightChildIndex = index * 2+1;
            let leftChildElement, rightChildElement;
            let swap = null;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement > element) {
                    swap = leftChildIndex;
                }
                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap!==null && rightChildElement > leftChildElement) || (swap===null && rightChildElement > element)) {
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
Time Complexity: O(N + K log N); we have 2 separate loops, the first will result in a O(N)
since we are heapifying the array and the second takes K log N; so this simplifies down to 
O(N + K log N);
Space Complexity: O(N); the heap will store N elements worst case scenario
*/