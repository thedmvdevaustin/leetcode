// Given the root of a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100

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
var deepestLeavesSum = function(root) {
    let queue = [root], levelSum = [];
    while (queue.length) {
        let length = queue.length, total = 0;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            total+=node.val
        }
        levelSum.push(total)
    }
    return levelSum[levelSum.length - 1];
};

/*
Time Complexity: O(N); worst case scenario we have to traverse to every 
element in the tree and each iteration we are performing constant operations
so this simplifies down to O(N);
Space Complexity: O(N); worst case scenario the entire last level of nodes
in the tree will be put into the queue. The last level in this case will
be n/2 nodes in total which simplifies down to O(N)
*/