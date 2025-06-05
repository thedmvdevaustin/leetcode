// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 105
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    if (!head.next) {
        return head;
    }
    let array = [];
    let newHead = head;
    while (newHead) {
        array.push(newHead.val);
        newHead = newHead.next;
    }
    [ array[k-1], array[array.length-k] ] = [ array[array.length-k], array[k-1] ];
    newHead = head;
    let i = 0
    while (i < array.length) {
        newHead.val = array[i];
        i++;
        newHead = newHead.next;
    }
    return head;
};

/*
Not Optimal space comlexity since all we have to do is swap the values 
themselves instead of the nodes. With swapping nodes it might be necessary
to put them in an array to swap them but with values you shouldn't have
to use the an extra array
Time Complexity: O(N); 2 separate for loops that traverse the entire list 
simplify down to O(N);
Space Complexity: O(N); created an array of size N to swap the nodes
*/