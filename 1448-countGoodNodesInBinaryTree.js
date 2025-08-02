// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

 

// Example 1:



// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.
// Example 2:



// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
// Example 3:

// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.
 

// Constraints:

// The number of nodes in the binary tree is in the range [1, 10^5].
// Each node's value is between [-10^4, 10^4].

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
var goodNodes = function(root) {
    let queue = [[root, root.val]], answer = 0;
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let [ node, max ] = queue.shift();
            max <= node.val ? answer++ : 0;
            if (node.left) queue.push([node.left, Math.max(max, node.val)]);
            if (node.right) queue.push([node.right, Math.max(max, node.val)]);
        }
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we are traversing every element
in the tree and performing constant operations each iteration which simplifies
down to O(N);
Space Complexity: O(N); worst case scenario we will have the add the entire
last level of the tree to the queue which when filled up is n/2 nodes 
which simplifies down to O(N);
*/