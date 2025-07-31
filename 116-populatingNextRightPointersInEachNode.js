// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Example 1:


// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 212 - 1].
// -1000 <= Node.val <= 1000
 

// Follow-up:

// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return root;
    let queue = [root];
    while (queue.length) {
        let length = queue.length, level = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
                queue.push(node.right)
            }
            level.push(node)
        }
        for (let i = 0; i < level.length - 1; i++) {
            level[i].next = level[i+1];
        }
        level[level.length - 1].next = null;
        console.log(level)
    }
    return root;
};

/*
Time Complexity: O(N+l) where n is the number of nodes in the tree and l
is the number of nodes per level; worse case we are traversing the entire
tree and processing each node; after each level we are traversing each level
and setting the node to the next that comes in the array the amount of nodes
on the level times;
Space Complexity: O(N); worst case scenario we will hold n/2 nodes for the 
last level of nodes which simplifies down to O(N) 
*/
