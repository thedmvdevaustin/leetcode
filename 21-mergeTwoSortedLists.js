// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(-1);
    let newHead = head;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            newHead.next = list1;
            list1 = list1.next;
        } else {
            newHead.next = list2;
            list2 = list2.next
        }
        newHead = newHead.next;
    }
    while (list1) {
        newHead.next = list1;
        list1 = list1.next;
        newHead = newHead.next
    }
    while (list2) {
        newHead.next = list2;
        list2 = list2.next;
        newHead = newHead.next
    }
    return head.next;
};

/*
Time Complexity: O(N+M) where N is the length of the first list and M is 
the length of the second list; we add them because we are scanning both lists exactly once
and every element is looked at once and added the the result so the complexity
is proportional to the total number of elements which is n+m
Space Complexity: O(1); even though we created one new listNode all the other
listNodes where created and nothing new was created, we only pointed pointers
at the listNodes that were already created, therefore no additional space is need
other than the new listnode we created which simplifies down to O(1)
*/