// There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.

// You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.

// The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.

// Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

 

// Example 1:

// Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
// Output: 0.78333
// Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.
// Example 2:

// Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
// Output: 0.53485
 

// Constraints:

// 1 <= classes.length <= 105
// classes[i].length == 2
// 1 <= passi <= totali <= 105
// 1 <= extraStudents <= 105

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    // (pass + 1) / (total + 1) - pass / total
        let maxHeap = new MyMaxHeap();
        for (const element of classes) {
            maxHeap.queue([((element[0]+1)/(element[1]+1) - element[0]/element[1]), element]);
        }
        for (let i = 0; i < extraStudents; i++) {
            let [gain, element] = maxHeap.dequeue();
            element[0]++;
            element[1]++;
            maxHeap.queue([((element[0]+1)/(element[1]+1) - element[0]/element[1]), element]);
        }
        let total = 0;
        while (maxHeap.size()) {
            let [gain, element] = maxHeap.dequeue();
            total+=element[0]/element[1];
        }
        return total/classes.length;
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
            return this.heap[1];
        }
        queue(value) {
            this.heap.push(value);
            let index = this.size(), element = this.heap[index];
            while (index > 1) {
                let parentIndex = Math.floor(index/2), parentElement = this.heap[parentIndex];
                if (element[0] <= parentElement[0]) break;
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
                    if (leftChildElement[0] > element[0]) {
                        swap = leftChildIndex;
                    }
                    if (rightChildIndex <= this.size()) {
                        rightChildElement = this.heap[rightChildIndex];
                        if ((swap===null && rightChildElement[0] > element[0]) || (swap!==null && rightChildElement[0] > leftChildElement[0])) {
                            swap = rightChildIndex;
                        }
                    }
                }
                if (swap === null) break;
                this.heap[index] = this.heap[swap];
                index = swap;
            }
            this.heap[index] = element;
            return root;
        }
    }

/*
Time Complexity: O(N log N + k Log N); putting the elements from the class
array into the heap takes N log N and the for loop after takes k time to complete;
every iteration during the k time we perform log N operations with the heap
so the for loop simplifies down to K log N; the while loop at the end takes O(N)
N log N time to complete. since it is not nested it is added to the time
complexity of the first 2 loops which is O(N log N + k Log N + N log N) which
simplifies down to O(N log N + K log N);
Space Complexity: O(N); at worst case the entire array of classes if put
into the Max Heap;
*/


