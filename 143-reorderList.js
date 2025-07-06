// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head.next) {
        return head;
    }
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    let newHead = head;
    while (prev && newHead && prev!==newHead) {
        let leftNext = newHead.next, rightNext = prev.next;
        newHead.next = prev;
        newHead = leftNext;
        if (newHead===prev) {
            break
        }
        prev.next = newHead;
        prev = rightNext;
    }
    return
};



/*
Time Complexity: O(N); each for loop is seperate and not nexted so they each
are added together instead of multiplied. Worst case scenario they are each
O(N) so the result if O(N);
Space Complexity: O(1); no additional space is needed
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head.next) return head;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    let current = head;
    while (current.next && prev.next) {
        let currentNext = current.next;
        let prevNext = prev.next;
        current.next = prev;
        prev.next = currentNext;
        current = currentNext;
        prev = prevNext;
    }
};

/*
Time Complexity: O(N); each loop we are only looping through half of the 
linked list which simplifies down to O(N); since we aren't nesting any
loops they will be added together which simplifies down to O(N) altogether;
// Space Complexity: O(1); no additional space is needed
*/