// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

// Example 1:



// Input: root = [1,null,3,2,4,null,5,6]
// Output: [[1],[3,2,4],[5,6]]
// Example 2:



// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 

// Constraints:

// The height of the n-ary tree is less than or equal to 1000
// The total number of nodes is between [0, 104]

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    queue = [root], answer = [];
    while (queue.length) {
        let length = queue.length, level = [];
        for (let i = 0; i < length; i++) {
            let currentNode = queue.shift();
            currentNode.children.forEach(x => {
                queue.push(x)
            })
            level.push(currentNode.val)
        }
        answer.push(level)
    }
    return answer;
};

/*
Time Complexity: O(N*C) where C is the number of children each Node has
Space Complexity: O(W) where w is the number of nodes per level
*/