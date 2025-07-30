// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    let answer = [], queue = [root], level = 1;
    while (queue.length) {
        let length = queue.length, levelNodes = [];
        for (let i = 0; i < length; i++) {
            let currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            levelNodes.push(currentNode.val)
        }
        if (level%2===0) levelNodes.reverse();
        answer.push(levelNodes);
        level++;
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we have to iterate each node 
in the tree;
Space Complexity: O(l) where l = length of nodes in level; we only hold
the amount of nodes in a level worst case scenario; not including the space
needed to store the output
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let queue = [root], answer = [], odd = false;
    while (queue.length) {
        let length = queue.length, level = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            level.push(node.val);
        }
        if (odd) {
            level.reverse()
            odd = false;
        } else {
            odd = true;
        }
        answer.push(level);
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we have to iterate each node 
in the tree;
Space Complexity: O(l) where l = length of nodes in level; we only hold
the amount of nodes in a level worst case scenario; not including the space
needed to store the output
*/