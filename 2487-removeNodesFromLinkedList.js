// You are given the head of a linked list.

// Remove every node which has a node with a greater value anywhere to the right side of it.

// Return the head of the modified linked list.

 

// Example 1:


// Input: head = [5,2,13,3,8]
// Output: [13,8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
// - Node 13 is to the right of node 5.
// - Node 13 is to the right of node 2.
// - Node 8 is to the right of node 3.
// Example 2:

// Input: head = [1,1,1,1]
// Output: [1,1,1,1]
// Explanation: Every node has value 1, so no nodes are removed.
 

// Constraints:

// The number of the nodes in the given list is in the range [1, 105].
// 1 <= Node.val <= 105

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    if (!head.next) {
        return head;
    }
    let prev = null;
    let newHead = head;
    while (newHead) {
        let next = newHead.next;
        newHead.next = prev;
        prev = newHead;
        newHead = next;
    }
    let max = prev.val;
    newHead = prev;
    while (prev.next) {
        if (max > prev.next.val) {
            prev.next = prev.next.next
        } else {
            max = prev.next.val;
            prev = prev.next;
        }
    }
    prev = null;
    while (newHead) {
        let next = newHead.next;
        newHead.next = prev;
        prev = newHead;
        newHead = next
    }
    return prev
};

/*
Time Complexity: O(N); worst case we traverse the list 3 separate times
which means we add each O(N) operation together which results in O(N)
Space Complexity: O(1); no additional space is needed except for constant
space;
*/ 