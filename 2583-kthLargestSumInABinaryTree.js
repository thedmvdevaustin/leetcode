// You are given the root of a binary tree and a positive integer k.

// The level sum in the tree is the sum of the values of the nodes that are on the same level.

// Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer than k levels in the tree, return -1.

// Note that two nodes are on the same level if they have the same distance from the root.

 

// Example 1:


// Input: root = [5,8,9,2,1,3,7,4,6], k = 2
// Output: 13
// Explanation: The level sums are the following:
// - Level 1: 5.
// - Level 2: 8 + 9 = 17.
// - Level 3: 2 + 1 + 3 + 7 = 13.
// - Level 4: 4 + 6 = 10.
// The 2nd largest level sum is 13.
// Example 2:


// Input: root = [1,2,null,3], k = 1
// Output: 3
// Explanation: The largest level sum is 3.
 

// Constraints:

// The number of nodes in the tree is n.
// 2 <= n <= 105
// 1 <= Node.val <= 106
// 1 <= k <= n

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let queue = [root], maxHeap = new MaxHeap();
    while (queue.length) {
        let length = queue.length, total = 0;
        for (let i = 0; i < length; i++) {
            let currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            total+=currentNode.val;
        }
        maxHeap.enqueue(total);
    }

    while (maxHeap.size() && k>1) {
        maxHeap.dequeue();
        k--;
    }
    return maxHeap.size() ? maxHeap.peek() : -1
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

    enqueue(value) {
        this.heap.push(value);
        let index = this.size(), element = this.heap[index];
        while (index > 1) {
            let parentIndex = Math.floor(index/2), parentElement = this.heap[parentIndex];
            if (element <= parentElement) break;
            this.heap[index] = parentElement;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    dequeue() {
        if (this.size()===1) return this.heap.pop();
        const root = this.peek();
        this.heap[1] = this.heap.pop();
        let index = 1, element = this.heap[index];
        while (true) {
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
                    if ((swap===null && rightChildElement > element) || (swap!==null && rightChildElement > leftChildElement)) {
                        swap = rightChildIndex;
                    }
                }
            }
            if (swap===null) break;
            this.heap[index] = this.heap[swap];
            index = swap
        }
        this.heap[index] = element;
        return root;
    }
}

/*
Time Complexity: O(N log w) where w is the number of levels there are; worst case
scenario we iterate through every node performing constant operations and the enqueue
is a log w operation that doesn't happen every iteration but the dequeue
after every level gets recorded into the heap takes log w at worst case
which makes this a O(N log w) algorithm
Space Complexity: O(W) worst case we have to record all the totals into the heap
which simplifies down the the amount of levels there are
*/