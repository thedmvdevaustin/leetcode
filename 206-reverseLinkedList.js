// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


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
// FIRST SOLUTION 
// var reverseList = function(head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     let prev = null;
//     let current = head;
//     let next;
//     while (current) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     return prev;
// };

// SECOND SOLUTION 
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
var reverseList = function(head) {
    let prev = null;
    let node = head;
    while (node) {
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev || head;
};

/*
Time Complexity: O(N); all cases you have to loop through the entire array
except if it is of length 1 or 0; then the while loop won't activate;
Space Complexity: O(1); no additional space is needed
*/