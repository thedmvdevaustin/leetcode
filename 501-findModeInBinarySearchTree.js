// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [1,null,2,2]
// Output: [2]
// Example 2:

// Input: root = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105
 

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

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
var findMode = function(root) {
    let max = -Infinity;
    const dfs = (node, map) => {
        if (!node) return;
        map[node.val] ? map[node.val]++ : map[node.val] = 1;
        max = Math.max(max, map[node.val]);
        dfs(node.left, map);
        dfs(node.right, map);
        return map;
    }
    let hashMap = dfs(root, {});
    let answer = [];
    for (const key in hashMap) {
        if (hashMap[key]===max) answer.push(Number(key))
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we have to traverse to every
node in the tree and perform constant operations which results in O(N) 
then we traverse every element in the hashMap the find the most frequent
element which is O(N) at worst case scenario. These 2 are added together
since they are not nested so the result is O(N) time;
Space Complexity: O(N); worst case scenario the hash map is filled with 
every element in the tree which is O(N) or the tree is skewed and looks 
like a linked list causing the recursion stack to be filled with O(N) 
functions at a time which simplifies down to O(N) 
*/