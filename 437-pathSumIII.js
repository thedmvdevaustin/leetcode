// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

 

// Example 1:


// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3
 

// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0;
    function dfs(node, path) {
        if (!node) return 0;
        path.push(node.val);
        let count = 0, total = 0;
        for(let i = path.length - 1; i >= 0; i--) {
            total+=path[i];
            if (total===targetSum) count++;
        }
        count+=dfs(node.left, [...path]);
        count+=dfs(node.right, [...path]);
        return count; 
    }
    return dfs(root, []);
};

/*
Time Complexity: O(N^2); worst case scenario we have a tree that is skewed
in this case at every node we will also traverse through the entirety of 
the path we added to the array so the result will be O(N^2);
Space Complexity: O(h); the recursion stack will have O(h) function in it at at time
and the path list will have O(h) number of nodes in it at a time which 
worst case can be O(N) also given that the tree is skewed;
*/