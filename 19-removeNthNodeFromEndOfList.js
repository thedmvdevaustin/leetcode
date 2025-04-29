/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next) {
        return null
    }
    let size = 0;
    let current = head;
    while (current) {
        current = current.next;
        size++;
    }
    if (size===n) {
        return head.next;
    }
    let i = 1;
    let newHead = head;
    while (newHead.next && i + n < size) {
        newHead = newHead.next;
        i++;
    }
    newHead.next = newHead.next.next;
    return head
};

//Time Complexity: Worst case O(N) because we'd have to traverse the entire
//list and remove the last element