// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n
 

// Follow up: Could you do it in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    /*
    1. traverse to the left position
    2. store the position before the left position(if it exists meaning the left pos isn't the
       first element in the list) and the left position(this will be our last element in the
       list)
    3. reverse the list from left to right
    4. point the element before the left position to the prev(this will be the node we get
       back after we reverse)
    5. point the left position stored element to the curNode(which is the element after what
       we have to reverse)
    */
    if (!head.next) {
        return head;
    }
    let newHead = head;
    let newHeadPrev = null;
    let newRightPos = null;
    let count = 1;
    while (count < left) {
        newHeadPrev = newHead;
        newHead = newHead.next;
        count++;
    }
    newRightPos = newHead;
    let prev = null;
    while (count <= right) {
        let next = newHead.next;
        newHead.next = prev;
        prev = newHead;
        newHead = next;
        count++;
    }
    if (newHeadPrev) {
        newHeadPrev.next = prev;
    }
    newRightPos.next = newHead;
    return newHeadPrev ? head : prev
};

/*
Time Complexity: O(N); we are only looping through the list once to reverse
the list from left and right and connect the links back to the right place
Space Complexity: O(1); no additional space is needed
*/