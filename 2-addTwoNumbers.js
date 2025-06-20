// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newList = new ListNode(0);
    let curNode = newList;
    let carry = 0;
    while (l1 && l2) {
        curNode.next = new ListNode((l1.val + l2.val + carry) % 10);
        carry = Math.floor((l1.val + l2.val + carry) / 10);
        l1 = l1.next;
        l2 = l2.next;
        curNode = curNode.next;
    }
    while (l1) {
        curNode.next = new ListNode((l1.val + carry) % 10);
        carry = Math.floor((l1.val + carry) / 10);
        l1 = l1.next;
        curNode = curNode.next;
    }
    while (l2) {
        curNode.next = new ListNode((l2.val + carry) % 10);
        carry = Math.floor((l2.val + carry) / 10);
        l2 = l2.next;
        curNode = curNode.next;
    }
    if (carry) {
        curNode.next = new ListNode(carry);
    }
    return newList.next;
};

/*
Time Complexity: O(N); worst case we traverse through whichever one is longer between
the 2 list which will result in O(N); in the while loop with both of them
we are moving both every iteration so that will still result in O(N);
Space Complexity: O(N); we need an additional created Linked list to store
the solution which will be the same length as the longest list +1 at worst 
case
*/
