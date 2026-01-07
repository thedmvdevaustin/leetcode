// You are given two integers n and k and two integer arrays speed and efficiency both of length n. There are n engineers numbered from 1 to n. speed[i] and efficiency[i] represent the speed and efficiency of the ith engineer respectively.

// Choose at most k different engineers out of the n engineers to form a team with the maximum performance.

// The performance of a team is the sum of its engineers' speeds multiplied by the minimum efficiency among its engineers.

// Return the maximum performance of this team. Since the answer can be a huge number, return it modulo 109 + 7.

 

// Example 1:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
// Output: 60
// Explanation: 
// We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
// Example 2:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
// Output: 68
// Explanation:
// This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
// Example 3:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
// Output: 72
 

// Constraints:

// 1 <= k <= n <= 105
// speed.length == n
// efficiency.length == n
// 1 <= speed[i] <= 105
// 1 <= efficiency[i] <= 108

/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    let array = Array.from({ length: n }, (_, i) => [efficiency[i], speed[i]]).sort((a,b) => b[0]-a[0]);
    let minHeap = new MyMinHeap(), answer = -Infinity, total = 0n;
    for (const [e, s] of array) {
        minHeap.add(s)
        total+=BigInt(s);
        if (minHeap.size() > k) {
            total-=BigInt(minHeap.delete());
        }
        answer = answer > total * BigInt(e) ? answer : total * BigInt(e);
    }
    return Number(answer % (1000000007n));
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
            if (element >= parentElement) break;
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
                if (leftChildElement < element) {
                    swap = leftChildIndex;
                }
                if (rightChildIndex <= this.size()) {
                    rightChildElement = this.heap[rightChildIndex];
                    if ((swap===null && rightChildElement < element) || (swap!==null && rightChildElement < leftChildElement)){
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
Time Complexity: O(N log N); the sorting algorithm takes N log N to complete;
Space Complexity: O(N); worst case scenario we will have N elements in the heap and we also
create an additional array that contains N elements;
*/