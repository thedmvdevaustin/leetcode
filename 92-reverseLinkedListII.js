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
    if (!head.next || left===right) {
        return head
    }
    if (left===1) {
        return reverseList(left, head, right);
    }
    let current = head;
    let i = 1;
    while (i +1 < left) {
        current = current.next;
        i++;
    }
    current.next = reverseList(left, current.next, right);
    return head;

    function reverseList(start, newHead, end) {
        let prev = null;
        let next;
        let curNode = newHead;
        while (start <= end) {
            next = curNode.next;
            curNode.next = prev;
            prev = curNode;
            curNode = next;
            start++;
        }
        newHead.next = curNode;
        return prev
    }
};

//Time Complexity: O(N) worst case we have to reverse the entire linked list