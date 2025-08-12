// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:


// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -104 <= Node.val <= 104
// root is guaranteed to be a valid binary search tree.
// -105 <= k <= 105

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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let array = [];
    const dfs = node => {
        if (!node) return;
        dfs(node.left);
        array.push(node.val);
        dfs(node.right);
        return
    }
    dfs(root);
    let left = 0, right = array.length - 1;
    while (left < right) {
        if (array[left]+array[right]===k) {
            return true;
        } else if (array[left]+array[right] < k) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};

/*
Time Complexity: O(N); worst case scenario we traversing all the elements in
the tree which and performing constant operations which will result in O(N)
Time and traversing the nodes again to get the 2 elements that add up to
are target if it exists which will result in another O(N) solution; since
they aren't nested we will add both of them together O(N+N) which simplifies
down to O(N);
Space Compexity: O(N); worst case the BST is skewed in which the recursion 
stack will fill up will O(N) amount of functions(since a depth first search
results in the recursion stack filling up with the height of the tree
amount of functions) and the array of elements will fill up with N amount 
of elements so the space results in O(N);

*/