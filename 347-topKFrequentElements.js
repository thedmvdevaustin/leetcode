// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}, heap = new MaxHeap(), answer = [];
    nums.forEach(x => {
        if (map[x]) {
            map[x]++;
        } else {
            map[x] = 1;
        }
    })
    for (let key in map) {
        heap.push([key, map[key]]);
    }
    console.log(heap)
    while (k > 0) {
        answer.push(Number(heap.pop()[0]));
        k--;
    }
    return answer;
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
            if (element[1] <= parentElement[1]) break;
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
                if (leftChildElement[1] > element[1]) {
                    swap = leftChildIndex;
                }

                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && rightChildElement[1] > element[1]) || (swap!==null && rightChildElement[1] > leftChildElement[1])) {
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
Time Complexity: O(N); worst case scenario we traverse through nums
which is O(N) and traversing the map is O(N) worst case scenario and K
is less than nums.length. Since they aren't nested inside each other then
we add the complexities together which simplifies to O(N);
Space Complexity: O(num of unique numbers): we create an additional obj
that stores the frequency of unique numbers and we put the object keys in
a heap which simplifies down to the number of unique numbers
*/