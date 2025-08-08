// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,2,3]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [1,2,4,5,6,7,3,8,9]

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
var preorderTraversal = function(root) {
    if (!root) return [];
    const dfs = (node, array) => {
        if (!node) return;
        array.push(node.val);
        dfs(node.left, array);
        dfs(node.right, array);
        return array;
    }
    return dfs(root, []);
};

/*
Time Complexity: O(N); worst case scenario we have to traverse the entire
tree of nodes to add them to the array which is a constant operation for
each iteration which simplifies down to O(N);
Space Complexity: O(h); h === height of the tree the depth of the 
recursion stack will at worst case store the amount of functions as the 
height of the tree
*/