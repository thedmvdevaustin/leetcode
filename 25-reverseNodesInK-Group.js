// 25. Reverse Nodes in k-Group
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000
 

// Follow-up: Can you solve the problem in O(1) extra memory space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    /*
    in no order
    1. counting k elements; k ? reverse : nothing;
    2. save the previous groups end node and set it to the first element of the next groups
       reversed group head node
    3. set the last element in the group to the next to the next failed group and return
    */
    let curNode = head;
    let prevGroupLastNode = null;
    let newHead = null;
    let prev = null;
    let count = 0;
    while (isKGroup(curNode)) {
        while (count<k) {
            let next = curNode.next;//2 3; 4 5
            curNode.next = prev;//null 1; null 3
            prev = curNode;//1 2; 3 4
            curNode = next;//2 3; 4 5
            count++;//1 2; 1 2
        }
        if (prevGroupLastNode) {
            prevGroupLastNode.next = prev;
        } else {
            newHead = prev;
        }
        while (prev.next) {
            prev = prev.next;
        }
        prevGroupLastNode = prev;
        prev = null;
        count = 0;
    }

    function isKGroup(node) {
        let count = 0;
        while (node && count < k) {
            node = node.next;
            count++
        }
        return count===k ? true : false;
    }
    
    if (curNode) {
        prevGroupLastNode.next = curNode;
    }
    return newHead;
};

/*
Time Complexity: O(N); only have to traverse the entire list which is O(N);
the while loop on the outside is only going O(N) in worst case scenario k===1
which results in O(N) time; also the 2 loops on the inside are going at worst 
O(K);
Space Complexity: O(1); no additional space is needed
*/