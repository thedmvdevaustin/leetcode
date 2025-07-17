// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

// Example 1:


// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
// Example 2:

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105

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
var maxLevelSum = function(root) {
    let answer = 0, queue = [root], level = 1, max = -Infinity;
    while (queue.length) {
        let length = queue.length, total = 0;
        for (let i = 0; i < length; i++) {
            let currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            total += currentNode.val;
        }
        if (total > max) {
            answer = level;
            max = total;
        }
        level++;
    }
    return answer;
};

/*
Time Complexity: O(N); worst case scenario we are iterating through all
the nodes in the tree at each level to add them up to see what is the 
greatest level sum;
Space Complexity: O(l) where l = the length of the level; worst case the 
queue will hold one level at a time so the extra space will be O(L);
*/