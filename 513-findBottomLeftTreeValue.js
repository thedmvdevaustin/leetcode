// Given the root of a binary tree, return the leftmost value in the last row of the tree.

 

// Example 1:


// Input: root = [2,1,3]
// Output: 1
// Example 2:


// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

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
var findBottomLeftValue = function(root) {
    let queue = [root], answer = [];
    while (queue.length) {
        let length = queue.length, level = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            level.push(node.val)
        }
        answer.push(level)
    }
    return answer[answer.length - 1][0]
};

/*
Time Complexity: O(N); worst case scenario we are traversing the entire 
tree and each iteration performing constant operations so this simplifies
down to O(N);
Space Complexity: O(N); worst case scenario we have the bottom level filled
completely with nodes in which we will push n/2 nodes to the queue which
simplifies down to O(N);
*/