// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heap = new MaxHeap();
    nums.forEach(x => heap.push(x));
    while (k > 1) {
        heap.pop();
        k--;
    }
    return heap.pop()
};

class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    peek() {
        return this.heap[1];
    }

    push(value) {
        this.heap.push(value);
        let index = this.size(), element = this.heap[index];
        while (index > 1) {
            let parentIndex = Math.floor(index / 2);
            let parentElement = this.heap[parentIndex];
            if (element <= parentElement) break;
            this.heap[index] = parentElement;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    pop() {
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
                if (leftChildElement > element) {
                    swap = leftChildIndex
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
Time Complexity: O(N); worst case scenario k is equal to nums.length
and we have to pop every element off of the heap to get out solution
Space Complexity: O(N); we make a heap and put every element onto the heap

*/