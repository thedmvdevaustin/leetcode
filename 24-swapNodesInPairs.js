// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

// Explanation:



// Example 2:

// Input: head = []

// Output: []

// Example 3:

// Input: head = [1]

// Output: [1]

// Example 4:

// Input: head = [1,2,3]

// Output: [2,1,3]

 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let prevGroupNode = null;
    let newHead;
    let curNode = head;
    while (curNode && curNode.next) {
        let reverseNumOfNodes = 2;
        let prev = null;
        while (reverseNumOfNodes > 0) {
            let next = curNode.next;
            curNode.next = prev;
            prev = curNode;
            curNode = next;
            reverseNumOfNodes--;
        }
        if (prevGroupNode) {
            prevGroupNode.next = prev;
        } else {
            newHead = prev;
        }
        prevGroupNode = prev.next;
    }
    if (curNode) {
        prevGroupNode.next = curNode;
    }
    return newHead;
};

/*
Time Complexity: O(N); only traversing through the linked list once;
Space Complexity: O(1); no additional space is needed;
*/