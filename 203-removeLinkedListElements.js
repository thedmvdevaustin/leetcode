/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
        return head
    }
    while (head && head.val === val) {
        head = head.next;
    }
    let newHead = head;
    let next;
    while (newHead && newHead.next) {
        while (newHead.next && newHead.next.val===val){
            next = newHead.next.next;
            newHead.next.next = null;
            newHead.next = next;
        }
        newHead = newHead.next;
    }
    return head;
};

//Time Complexity: O(N) we have to traverse entire linked list to see if 
// each value is a value that needs to be removed 