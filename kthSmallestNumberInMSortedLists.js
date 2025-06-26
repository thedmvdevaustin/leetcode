class MinHeap {
    constructor() {
        this.heap = [null];
    }
    //size, insert, delete
    size() {
        return this.heap.length - 1;
    }

    peek() {
        return this.heap[1];
    }

    insert(value) {
        this.heap.push(value);
        let index = this.size(), element = this.heap[index];
        while (index > 1) {
            let parentIndex = Math.floor(index / 2);
            let parentElement = this.heap[parentIndex];
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
        let index = 1, element = this.heap[index];
        while (true) {
            let leftChildIndex = index*2, rightChildIndex = index*2+1;
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

function smallestNumberInSortedLists(lists, k) {
    //lists is a list of lists
    let minHeap = new MinHeap();
    let m = 0;
    for (let i = 0; i < lists.length; i++) {
        minHeap.insert([lists[i][0], i]);
        m++;
    }
    let listIterationVariables = Array(m).fill(1);
    let element, listNumber;
    while (minHeap.size()) {
        [ element, listNumber ] = minHeap.delete();
        k--;
        if (k===0) break;
        if (listIterationVariables[listNumber] < lists[listNumber].length) {
            minHeap.insert([lists[listNumber][listIterationVariables[listNumber]], listNumber]);
            listIterationVariables[listNumber]++;
        }
    }
    return element;
}


console.log(smallestNumberInSortedLists([[1,6,6,12,13], [5,7,8,10], [2,4,5,11]], 50))
console.log(smallestNumberInSortedLists([[2,6,8], [3,6,10], [5,8,11]], 5))
console.log(smallestNumberInSortedLists([[5,8,9], [1,7]], 3))
