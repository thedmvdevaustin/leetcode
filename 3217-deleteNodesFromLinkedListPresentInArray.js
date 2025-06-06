// You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

 

// Example 1:

// Input: nums = [1,2,3], head = [1,2,3,4,5]

// Output: [4,5]

// Explanation:



// Remove the nodes with values 1, 2, and 3.

// Example 2:

// Input: nums = [1], head = [1,2,1,2,1,2]

// Output: [2,2,2]

// Explanation:



// Remove the nodes with value 1.

// Example 3:

// Input: nums = [5], head = [1,2,3,4]

// Output: [1,2,3,4]

// Explanation:



// No node has value 5.

 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// All elements in nums are unique.
// The number of nodes in the given list is in the range [1, 105].
// 1 <= Node.val <= 105
// The input is generated such that there is at least one node in the linked list that has a value not present in nums.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let set = new Set(nums);
    while (head && set.has(head.val)) {
        head = head.next
    }
    let newHead = head;
    while (newHead && newHead.next) {
        if (set.has(newHead.next.val)) {
            newHead.next = newHead.next.next;
        } else {
            newHead = newHead.next;
        }
    }
    return head;
};

/*
Time Complexity: O(N); worst case we will traverse the entire list once
Space Complexity: O(nums); we are changing the entire array of nums to 
a set which takes up an additional space of nums 
*/