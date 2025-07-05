// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    if (!head.next) {
        return true;
    }
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow.printList())
    let reverse = reverseList(slow);
    console.log(reverse.printList())
    let reverseNode = reverse;
    let curNode = head;
    console.log(curNode.printList())
    while (curNode !== slow) {
        if (curNode.val !== reverseNode.val) {
            return false
        }
        curNode = curNode.next;
        reverseNode = reverseNode.next

    }
    reverseList(reverse);
    function reverseList(node) {
        let prev = null;
        while (node) {
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return prev;
    }
    return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


var isPalindrome = function(head) {
    if (!head.next) return head;
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    if (fast) slow = slow.next;
    while (slow && prev) {
        if (slow.val !== prev.val) {
            return false;
        }
        slow = slow.next;
        prev = prev.next;
    }
    return true;
};

/*
Time Complexity: O(N): worst case scenario we are traversing the linked list
O(N/2) every time we traverse which simplifies down to O(N);
Space Complexity: O(1); no extra space was needed
*/