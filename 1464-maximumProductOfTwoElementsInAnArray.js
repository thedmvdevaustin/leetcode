// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
// Example 3:

// Input: nums = [3,7]
// Output: 12
 

// Constraints:

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums = nums.sort((a,b) => a-b);
    return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1);
};

/*
Time Comlexity: O(n log n); sorting takes O(n log n);
Space Complexity: O(1); unless the sorting algorithm that is uses takes
up extra space;
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let heap = new MaxHeap();
    nums.forEach(x => heap.push(x));
    return (heap.pop() - 1) * (heap.pop() - 1);
};

class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    //size, push, pop

    size() {
        return this.heap.length - 1;
    }

    push(value) {
        this.heap.push(value);
        let index = this.size(), element = this.heap[index];
        while (index > 1) {
            let parentIndex = Math.floor(index / 2);
            let parentElement = this.heap[parentIndex];
            if (element <= parentElement) break;
            this.heap[index] = parentElement;
            index = parentIndex
        }
        this.heap[index] = element;
    }

    pop() {
        if (this.size()===1) return this.heap.pop();
        const root = this.heap[1];
        this.heap[1] = this.heap.pop()
        let index = 1, element = this.heap[index];
        while(true) {
            let leftChildIndex = 2*index, rightChildIndex = 2*index+1;
            let leftChildElement, rightChildElement;
            let swap = null;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement > element) {
                    swap = leftChildIndex;
                }
                
                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && rightChildElement > element) || swap!==null && rightChildElement > leftChildElement) {
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
Time Complexity: O(n log n); we have to go through each element in the nums array
and push it onto the heap which is a log n operation so this simplifies to
O(n log n);
Space Complexity: O(n); every element in the nums array is put into the heap
*/