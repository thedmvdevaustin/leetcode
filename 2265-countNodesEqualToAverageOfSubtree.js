// Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

// Note:

// The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
// A subtree of root is a tree consisting of root and all of its descendants.
 

// Example 1:


// Input: root = [4,8,5,0,1,null,6]
// Output: 5
// Explanation: 
// For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
// For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
// For the node with value 0: The average of its subtree is 0 / 1 = 0.
// For the node with value 1: The average of its subtree is 1 / 1 = 1.
// For the node with value 6: The average of its subtree is 6 / 1 = 6.
// Example 2:


// Input: root = [1]
// Output: 1
// Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let answer = 0;
    const dfs = node => {
        if (!node) return [0,0];
        let [ leftCount, leftTotal ] = dfs(node.left);
        let [ rightCount, rightTotal ] = dfs(node.right);
        let count = leftCount+rightCount+1;
        let total = leftTotal+rightTotal+node.val;
        if (Math.floor(total/count)===node.val) {
            answer++;
        }
        return [count, total];
    }
    dfs(root);
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we traverse each node in the 
tree performing constant operations which simplifies down to O(N);
Space Complexity: O(N) worst case scenario we have a skewed tree(which is
set up like a linked list) in which the recursive stack will fill up will
the same amount of functions as the amount of nodes in the tree which 
simplifies down to O(N); best case scenario the tree is balanced so 
the recursive stack will fill up with h(the height of the tree) amount of
elements
*/