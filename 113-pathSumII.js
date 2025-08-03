// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Explanation: There are two paths whose sum equals targetSum:
// 5 + 4 + 11 + 2 = 22
// 5 + 8 + 4 + 5 = 22
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) return [];
    let queue = [[root, 0, []]], map = {}, answer = [];
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let [ node, total, path ] = queue.shift();
            total+=node.val;
            path.push(node.val);
            if (!node.left && !node.right && total===targetSum) {
                answer.push(path);
            }
            if (node.left) queue.push([node.left, total, [...path]]);
            if (node.right) queue.push([node.right, total, [...path]]);
        }
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we are traversing the entire 
tree and each iteration performing constant operations so this simplifies
down to O(N);
Space Complexity: O(N); worst case scenario we have the bottom level filled
completely with nodes in which we will push n/2 nodes to the queue which
simplifies down to O(N) and the arrays that are passed down for the path
which will be at worst O(h) h being the height of the tree which is less than
the O(N) space for the queue so it is dropped;
*/