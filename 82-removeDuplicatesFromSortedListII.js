// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:


// Input: head = [1,1,1,2,3]
// Output: [2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let array = Array.from(new Array(300), x => false);
    let newHead = head;
    while (newHead.next) {
        if (newHead.val===newHead.next.val) {
            array[newHead.val] = true;
        }
        newHead = newHead.next;
    }
    while (head && array[head.val]) {
        head = head.next;
    }
    newHead = head;
    while (newHead && newHead.next) {
        if (array[newHead.next.val]) {
            newHead.next = newHead.next.next
        } else {
            newHead = newHead.next;
        }
    }
    return head;
};  

/*
Time Complexity: O(N); worst case we have to traverse the linked list on 
2 separate occasions
Space Complexity: O(300); we create an frequency array of the max size of the 
input which is 300; this will simplify down to constant space but it is 
still additional space
*/