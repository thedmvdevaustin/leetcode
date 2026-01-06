// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.
// Example 2:

// Input: nums = [-1,-2,3,4], k = 3
// Output: [-1,3,4]
// Explanation: 
// The subsequence has the largest sum of -1 + 3 + 4 = 6.
// Example 3:

// Input: nums = [3,4,3,3], k = 2
// Output: [3,4]
// Explanation:
// The subsequence has the largest sum of 3 + 4 = 7. 
// Another possible subsequence is [4, 3].
 

// Constraints:

// 1 <= nums.length <= 1000
// -105 <= nums[i] <= 105
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let minHeap = new MyMinHeap(), start = 0, total = 0;
    nums.forEach((x,i) => {
        minHeap.add([x, i]);
        minHeap.size() > k ? minHeap.delete() : 0;
    })
    let answer = [];
    while (minHeap.size()) {
        answer.push(minHeap.delete())
    }
    answer.sort((a,b) => a[1]-b[1]);
    return answer.map(x => x[0]);
};

class MyMinHeap {
    constructor() {
        this.heap = [null];
    }

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
            if (element[0] >= parentElement[0]) break;
            this.heap[index] = parentElement;
            index = parentIndex;
        }
        this.heap[index] = element;
        return;
    }

    delete() {
        if (this.size() === 1) return this.heap.pop();
        const root = this.peek();
        this.heap[1] = this.heap.pop();
        let index = 1, element = this.heap[index];
        while (true) {
            let leftChildIndex = index*2, rightChildIndex = index*2+1, swap = null;
            let leftChildElement, rightChildElement
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement[0] < element[0]) {
                    swap = leftChildIndex;
                }
                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && rightChildElement[0] < element[0]) || (swap!==null && rightChildElement[0] < leftChildElement[0])){
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
Time Complexity: O(N log N); 
Space Complexity: O(k); 
*/