// Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

// A grandparent of a node is the parent of its parent if it exists.

 

// Example 1:


// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
// Example 2:


// Input: root = [1]
// Output: 0
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100

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
var sumEvenGrandparent = function(root) {
    let queue = [root], answer = 0;
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            let isEven = node.val%2===0;
            if (isEven) {
                if (node.left && node.left.left) {
                    answer+=node.left.left.val;
                }
                if (node.left && node.left.right) {
                    answer+=node.left.right.val;
                }
                if (node.right && node.right.left) {
                    answer+=node.right.left.val;
                }
                if (node.right && node.right.right) {
                    answer+=node.right.right.val;
                }
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we are traversing every element
in the tree and performing constant operations each iteration which simplifies
down to O(N);
Space Complexity: O(N); worst case scenario we will have the add the entire
last level of the tree to the queue which when filled up is n/2 nodes 
which simplifies down to O(N);
*/