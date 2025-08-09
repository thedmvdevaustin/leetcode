// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.

 

// Example 1:


// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
// Example 2:

// Input: root = [0]
// Output: 0
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// Node.val is 0 or 1.

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
var sumRootToLeaf = function(root) {
    let answer = 0;
    const dfs = (node, number) => {
        if (!node) return number;
        number+=`${node.val}`;
        if (!node.left && !node.right) {
            answer+=parseInt(number,2);
        }
        dfs(node.left, number);
        dfs(node.right, number);
        return;
    }
    dfs(root, "");
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
