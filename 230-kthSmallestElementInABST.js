// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
 

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
 

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let answer;
    const dfs = node => {
        if (!node) return;
        dfs(node.left);
        k--;
        if (!k) answer = node.val;
        dfs(node.right);
        return;
    }
    dfs(root);
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we are traversing through all
the nodes inside the tree and performing constant operations which simplifies
down to O(N);
Space Complexity: O(N) in the worst case because the the tree can be skewed
which makes the tree look like a linked list; when the tree is a linked lis
the recursion stack that stores all the functions gets filled up with the 
height of the tree which would be O(N) in the case that the tree is skewed;
On average cases when it is more balanced it would be O(H) H===height of 
tree;
*/