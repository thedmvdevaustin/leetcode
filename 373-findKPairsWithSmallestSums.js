// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

// Define a pair (u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

 

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 105
// -109 <= nums1[i], nums2[i] <= 109
// nums1 and nums2 both are sorted in non-decreasing order.
// 1 <= k <= 104
// k <= nums1.length * nums2.length

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let minHeap = new MinHeap();
    let visited = new Set();
    let output = [];
    minHeap.insert([nums1[0]+nums2[0], 0,0]);
    visited.add(`${0},${0}`);
    while (minHeap.size()) {
        let [ sum, i, j ] = minHeap.delete();
        output.push([nums1[i], nums2[j]]);
        k--;
        if (!k) break;
        if (i+1 < nums1.length && !visited.has(`${i+1},${j}`)) {
            minHeap.insert([nums1[i+1]+nums2[j], i+1, j]);
            visited.add(`${i+1},${j}`)
        }
        if (j+1 < nums2.length && !visited.has(`${i},${j+1}`)) {
            minHeap.insert([nums1[i]+nums2[j+1], i, j+1]);
            visited.add(`${i},${j+1}`)
        }
    }
    return output;
};

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    peek() {
        return this.heap[1]
    }

    insert(value) {
        this.heap.push(value);
        let index = this.size(), element = this.heap[index];
        while (index > 1) {
            let parentIndex = Math.floor(index/2);
            let parentElement = this.heap[parentIndex]
            if (element[0] >= parentElement[0]) break;
            this.heap[index] = parentElement;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    delete() {
        if (this.size()===1) return this.heap.pop();
        const root = this.peek();
        this.heap[1] = this.heap.pop();
        let index = 1, element = this.heap[index], elementTotal = element[0]+element[1];
        while (true) {
            let leftChildIndex = 2*index, rightChildIndex = 2*index+1;
            let leftChildElement, rightChildElement;
            let swap = null;
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
Time Complexity: O(k log k); where k is the number of pairs we are looking for
we will loop through the while loop in the function atleast k times to get
k pairs, then the operation to insert and delete from the minHeap while take O(log k)
time to get and these operations happen separately each iteration of k so 
this simplifies down to O(k log k)
Space Complexity: O(K) worst case we need to store K amount of pairs inside the visited set
the minHeap will only take a couple at a time which will simplify to constant space
*/