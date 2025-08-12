// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
// Example 2:


// Input: root = [5,1,7]
// Output: [1,null,5,null,7]
 

// Constraints:

// The number of nodes in the given tree will be in the range [1, 100].
// 0 <= Node.val <= 1000

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
var increasingBST = function(root) {
    if (!root.left && !root.right) return root;
    let array = [];
    const dfs = node => {
        if (!node) return;
        dfs(node.right);
        array.push(node.val);
        dfs(node.left);
        return;
    }
    dfs(root);
    let temp = new TreeNode(array.pop())
    let newRoot = temp;
    while (array.length) {
        temp.left = null;
        temp.right = new TreeNode(array.pop());
        temp = temp.right;
    }
    return newRoot;
};

/*
Time Complexity: O(N) we traversing each node in the tree twice separately
which simplifies down to O(N);
Space Complexity: O(N); the worst case scenario is our tree will be skewed
which means our recusive stack will reach O(N) and the size of our array
will reach O(N) in all cases so this simplifies down to O(N);
*/