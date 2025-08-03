// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

 

// Example 1:


// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:


// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// 0 <= Node.val <= 9
// The depth of the tree will not exceed 10.

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
var sumNumbers = function(root) {
    let queue = [[root, ""]], answer = 0
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let [ node, stringNumber ] = queue.shift();
            stringNumber+=String(node.val);
            if (!node.left && !node.right) {
                answer+=Number(stringNumber)
            }
            if (node.left) queue.push([node.left, stringNumber]);
            if (node.right) queue.push([node.right, stringNumber]);
        }
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we are traversing the entire 
tree and each iteration performing constant operations so this simplifies
down to O(N);
Space Complexity: O(N); worst case scenario we have the bottom level filled
completely with nodes in which we will push n/2 nodes to the queue which
simplifies down to O(N);
*/