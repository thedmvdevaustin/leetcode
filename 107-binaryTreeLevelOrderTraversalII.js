// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    let answer = [], queue = [root];
    while (queue.length) {
        let length = queue.length, level = [];
        for (let i = 0; i < length; i++) {
            let currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            level.push(currentNode.val);
        }
        answer.push(level)
    }
    return answer.reverse()
};

/*
Time Complexity: O(N); worst case scenario we iterate all the nodes in the tree
and the reverse function will take O(l) for the amount of levels there are in
the tree which simplifies down to O(N);
Space Complexity: O(l); l=length of a level; worst case scenario we will have 
the length of a level in the queue at a time 
*/