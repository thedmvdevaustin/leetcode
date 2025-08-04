// Given the root of a binary tree, replace the value of each node in the tree with the sum of all its cousins' values.

// Two nodes of a binary tree are cousins if they have the same depth with different parents.

// Return the root of the modified tree.

// Note that the depth of a node is the number of edges in the path from the root node to it.

 

// Example 1:


// Input: root = [5,4,9,1,10,null,7]
// Output: [0,0,0,7,7,null,11]
// Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
// - Node with value 5 does not have any cousins so its sum is 0.
// - Node with value 4 does not have any cousins so its sum is 0.
// - Node with value 9 does not have any cousins so its sum is 0.
// - Node with value 1 has a cousin with value 7 so its sum is 7.
// - Node with value 10 has a cousin with value 7 so its sum is 7.
// - Node with value 7 has cousins with values 1 and 10 so its sum is 11.
// Example 2:


// Input: root = [3,1,2]
// Output: [0,0,0]
// Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
// - Node with value 3 does not have any cousins so its sum is 0.
// - Node with value 1 does not have any cousins so its sum is 0.
// - Node with value 2 does not have any cousins so its sum is 0.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 105].
// 1 <= Node.val <= 104

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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    let queue = [root], levelSum = [];
    while (queue.length) {
        let length = queue.length, total = 0;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            total+=node.val;
        }
        levelSum.push(total);
    }
    root.val = 0;
    queue = [root];
    let depth = 1;
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left && node.right) {
                let temp = node.left.val;
                node.left.val = levelSum[depth]-node.left.val-node.right.val;
                node.right.val = levelSum[depth]-temp-node.right.val;
                queue.push(node.left);
                queue.push(node.right);
            } else if (node.left) {
                node.left.val = levelSum[depth]-node.left.val;
                queue.push(node.left);
            } else if (node.right) {
                node.right.val = levelSum[depth]-node.right.val;
                queue.push(node.right);
            }
        }
        depth++;
    }
    return root;
};

/*
Time Complexity: O(N); worst case scenario we are traversing the entire 
tree and each iteration performing constant operations so this simplifies
down to O(N);
Space Complexity: O(N); worst case scenario we have the bottom level filled
completely with nodes in which we will push n/2 nodes to the queue which
simplifies down to O(N);
*/