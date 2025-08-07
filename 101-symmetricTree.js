// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 

// Follow up: Could you solve it both recursively and iteratively?

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
var isSymmetric = function(root) {
    let queue = [root];
    while (queue.length) {
        let length = queue.length, level = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (!node) {
                level.push(node);
                continue;
            }
            node.left ? queue.push(node.left) : queue.push(null);
            node.right ? queue.push(node.right) : queue.push(null);
            level.push(node.val);
        }
        let left = 0, right = level.length - 1;
        while (left < right) {
            if (level[left]!==level[right]) return false;
            left++;
            right--;
        }
    }
    return true;
};

/*
BREADTH FIRST SEARCH
Time Complexity: O(N); worst case scenario we have to traverse every node
in the tree and perform constant operations for each iteration added to the
2 pointer algo which checks to see if the level is symmetrical which will
result in n/2 iterations which is also O(N) which simplifies the entire
algo down to O(N);
Space Complexity: O(N); worst case scenario we are processing the entire 
last level of nodes in the array and in our queue which is n/2 nodes which
simplifies down to O(N) for both of those data structures
*/

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
var isSymmetric = function(root) {
    const recursion = (node1, node2) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        return node1.val === node2.val && recursion(node1.left, node2.right) && recursion(node1.right, node2.left);
    }
    return recursion(root.left, root.right);
};

/*
DEPTH FIRST SEARCH
Time Complexity: O(N); worst case scenario we are traversing through n/2
nodes which simplifies down to O(N);
Space Compexity: O(h); the recursion stack will go as deep as the height of 
tree worst case scenario
*/

