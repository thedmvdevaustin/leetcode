// There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

// A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

// Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

 

// Example 1:

// Illustration of graph
// Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// Output: [2,4,5,6]
// Explanation: The given graph is shown above.
// Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
// Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
// Example 2:

// Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
// Output: [4]
// Explanation:
// Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.
 

// Constraints:

// n == graph.length
// 1 <= n <= 104
// 0 <= graph[i].length <= n
// 0 <= graph[i][j] <= n - 1
// graph[i] is sorted in a strictly increasing order.
// The graph may contain self-loops.
// The number of edges in the graph will be in the range [1, 4 * 104].

 /**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let safe = Array.from({ length: graph.length }), answer = [];
    for (let i = 0; i < graph.length; i++) {
        if (dfs(i)) answer.push(i);
    }

    function dfs(currentNode) {
        if (safe[currentNode] || safe[currentNode]===false) {
            return safe[currentNode]
        }
        safe[currentNode] = false;
        for (let i = graph[currentNode].length - 1; i >= 0; i--) {
            let neighbor = graph[currentNode][i];
            if (!dfs(neighbor)) {
                return false;
            }
        }
        safe[currentNode] = true;
        return true;
    }
    return answer;
};
/*
safe = [f,f,t,f,t,t,u]; ans = []; 
f1: cN = 0; safe[cN] = u  nei = 2(true), 1
f2: cN = 2; safe[cN] = u  nei = 5 r:t
f3: cN = 5; safe[cN] = u; r:t nei = 
f4: cN = 1; safe[cN] =u  nei = 3 r:f
f5: cN = 3; safe[cN] = u  nei = 0 r:f
f6: cN = 0; safe[cN] = f(r:f)  nei =
f7: cN = 4; safe[cN] =u  nei =5 r:t
f8: cN = 5; safe[cN] = t(r:t) nei =
f9: cN = ; safe[cN] =  nei =
f10: cN = ; safe[cN] =  nei =
*/

/*
Time Complexity: O(V+E): worst case scenario we will have to traverse 
through each vertex/node in the entire graph and for each vertex/node
traverse each edge that is connected to each vertex/node
Space Complexity: O(V) we have an array that will at worst case hold the 
number of vertexes/nodes in the graph 
*/