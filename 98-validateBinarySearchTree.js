// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
 

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function preorder(node, min, max) {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return preorder(node.left, min, node.val) && preorder(node.right, node.val, max);
    }
    return preorder(root, -Infinity, Infinity);
};

/*
Time Complexity: O(N) worst case scenario we have to explore every node 
in the tree which simplifies down to O(N);
Space Complexity: O(h); h===height of tree; worst case scenario the
recursion stack holds the height of the tree amount of functions in it at
once
*/