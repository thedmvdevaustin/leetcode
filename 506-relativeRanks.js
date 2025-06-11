// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

 

// Example 1:

// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
// Example 2:

// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

 

// Constraints:

// n == score.length
// 1 <= n <= 104
// 0 <= score[i] <= 106
// All the values in score are unique.

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let heap = new MaxHeap();
    //size, peek, push, pop
    for (let i = 0; i < score.length; i++) {
        heap.push([score[i], i]);
    }
    let place = 1;
    while (heap.size() > 0) {
        let element = heap.pop();
        switch (place) {
            case 1:
                score[element[1]] = "Gold Medal";
                break;
            case 2:
                score[element[1]] = "Silver Medal";
                break;
            case 3:
                score[element[1]] = "Bronze Medal";
                break;
            default:
                score[element[1]] = `${place}`;
                break;
        }
        place++;
    }
    return score;
};

class MaxHeap {
    constructor() {
        this.heap = [null]
    }

    size() {
        return this.heap.length - 1;
    }

    peek() {
        if (this.size()){
            return this.heap[1]
        } else {
            return console.error('heap is empty')
        }
    }

    push(arrayOfKeyValue) {
        if (this.size()===0) {
            this.heap.push(arrayOfKeyValue);
            return;
        }
        this.heap.push(arrayOfKeyValue);
        let index = this.size();
        let element = this.heap[index]; //gives us the array of the key and value
        while (index > 1) {
            let parentIndex = Math.floor(index/2);
            let parentElement = this.heap[parentIndex]; //gives us the array of the key and value
            if (element[0] <= parentElement[0]) break;
            this.heap[index] = parentElement;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    pop() {
        if (this.size()===1) return this.heap.pop();
        const root = this.heap[1];
        this.heap[1] = this.heap.pop();
        let index = 1; //root index
        let element = this.heap[1];
        while (true) {
            let leftChildIndex = 2 * index, rightChildIndex = 2 * index + 1;
            let leftChildElement, rightChildElement;
            let swap = null;
            if (leftChildIndex <= this.size()) {
                leftChildElement = this.heap[leftChildIndex];
                if (leftChildElement[0] > element[0]) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex <= this.size()) {
                rightChildElement = this.heap[rightChildIndex];
                if ((swap===null && rightChildElement[0] > element[0]) || swap!==null && rightChildElement[0] > leftChildElement[0]) {
                    swap = rightChildIndex;
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
Time Complexity: O(N log N); looping through every element takes O(N) then
every iteration we are inserting it into the heap which takes log n time
which will make this a O(N log N) complexity
Space Complexity: O(N) for the extra space it takes to put every element
in our list inside of the heap
THIS SOLUTION IS NOT NECESSARY ALL YOU HAVE TO DO IS SORT THE LIST AND
PERFORM THE SWITCH STATEMENT FOR EVERY ELEMENT IN THE LIST; JUST DID THIS
TO PRACTIVE CREATING THE HEAP AND USING IT
*/
