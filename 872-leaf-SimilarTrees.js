// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

// Example 1:


// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true
// Example 2:


// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false
 

// Constraints:

// The number of nodes in each tree will be in the range [1, 200].
// Both of the given trees will have values in the range [0, 200].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const dfs = (node) => {
        if (!node) return "";
        if (!node.left && !node.right) {
            return `${node.val}-`
        }
        let left = dfs(node.left);
        let right = dfs(node.right);
        return left+right;
    }
    console.log()
    return dfs(root1)===dfs(root2);
};

/*
Time Complexity: O(N); worst case scenario we have to traverse the entire
tree of nodes
Spade Complexity: O(max(N, M)); worst case scneario because the recursion 
stack will fill up with the more amount of nodes in the tree given that 
the larger tree is filled all the way up
*/