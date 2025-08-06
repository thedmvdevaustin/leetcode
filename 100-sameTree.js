// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    let pQueue = [p], qQueue = [q];
    while (pQueue.length || qQueue.length) {
        let pLength = pQueue.length, qLength = qQueue.length;
        if (pLength!==qLength) return false;
        for (let i = 0; i < pLength; i++) {
            let pNode = pQueue.shift(), qNode = qQueue.shift();
            if (pNode.val!==qNode.val) return false;
            if (pNode.left && qNode.left) {
                pQueue.push(pNode.left);
                qQueue.push(qNode.left);
            }
            if (pNode.right && qNode.right) {
                pQueue.push(pNode.right);
                qQueue.push(qNode.right);
            }
            if ((pNode.left && !qNode.left) || (!pNode.left && qNode.left) || (pNode.right && !qNode.right) || (!pNode.right && qNode.right)) return false;
        }
    }
    return true;
};

/*
BREADTH FIRST SEARCH SOLUTION
Time Complexity: O(N); worst case sceneario we are traversing through all
nodes in the tree and returning true; since we are performing constant 
operations during each iteration it simplifies down to O(N);
Space Complexity: O(N); worst case scenario we have 2 separate queues that
could fill up to n/2 nodes which will be 2*(N/2); which still simplifies 
down to O(N) space
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val===q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
};

/*
DEPTH FIRST SEARCH SOLTUION
Time complexity: O(min((N,M)), where N is the number of nodes in the 
first tree and M is the number of nodes in the second tree. Worst case 
scenario both trees have the same number of nodes and we have to visit 
each one which will result in an O(N) solution but the average case we
won't visit every node only the amount of nodes in the smaller one because
it won't be any additional nodes to visit;
Space Complexity: O(min(h1,h2));  where h1 is the height of the first tree
and h2 is the height of the second tree. The Space comes from the space used 
by the recursive stack which is typically the height of the tree but we only
have to use the space for which ever tree is smaller on average cases. Worst
case would be O(H) or O(N) given that both heights are the same for O(H) 
and it would be O(N) given that both trees are skewed(looks like a linked list);
*/