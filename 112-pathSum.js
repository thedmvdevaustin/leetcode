// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let queue = [[root, 0]];
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let [ node, sum ] = queue.shift();
            if (!node.left && !node.right) {
                if (sum+node.val===targetSum) return true;
            }
            if (node.left) queue.push([node.left, sum+node.val]);
            if (node.right) queue.push([node.right, sum+node.val]);
        }
    }
    return false;
};

/*
BREADTH FIRST SEARCH
Time Complexity: O(N); worst case scenario we have to traverse the entire
tree and during each iteration perform constant operations which simplfies
down to O(N);
Space Complexity: O(N) worst case scenario when we process our last level
of the tree we can get n/2 elements in the queue at once which simplifies 
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    const dfs = (node,total) => {
        if (!node) return false
        if (!node.left && !node.right) {
            if (total-node.val===0) {
                return true;
            }
            return false;
        }
        let left = dfs(node.left, total-node.val);
        let right = dfs(node.right, total-node.val);
        return left || right;
    }
    return dfs(root,targetSum);
};

/*
DEPTH FIRST SEARCH
Time Complexity: O(N); worst case scenario we have to traverse the entire
tree to every node in the tree and perform constant operations which 
simplifies down to O(N);
Space Complexity: O(h); h === height of tree; the recursion stack will 
at worst case only be filled with the height of the tree amount of 
functions
*/