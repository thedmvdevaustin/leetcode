// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let queue = [root], depth = 0;
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        depth++;
    }
    return depth;
};

/*
BREADTH FIRST SEARCH
Time Complexity: O(N) worst case scenario we are traversing all the nodes
in the tree and performing constant operations which simplifies down to 
O(N);
Space Complexity: O(N); worst case scenario we are puttin the entire last
line of nodes in the queue which will contain N/2 nodes which simplifies
down to O(N);
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left,right) + 1;
};

/*
DEPTH FIRST SEARCH
Time Complexity: O(N); in all cases we will have to traverse to every single
node in the tree performing constant operations which simplifies down to O(N)
Space Complexity: O(h); h being the height of the tree the recursive stack will only go as deep as the 
height of the tree worst case scenario
*/