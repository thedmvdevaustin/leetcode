// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,3,2]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [4,2,6,5,7,1,3,9,8]

// Explanation:



// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const answer = [];
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        answer.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we are visiting every node
in the tree which would simplfy down to O(N);
Space Complexity: worst case is O(N); if we have a skewed tree because the 
recursion stack would need to go as deep as the height of the tree which
would be every node in a skewed tree; average case would be O(log n); since
the height would be log n given that the tree isn't skewed
*/