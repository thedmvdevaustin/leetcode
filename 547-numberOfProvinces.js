// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

 

// Example 1:


// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:


// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
 

// Constraints:

// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visited = new Set();
    let answer = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (visited.has(i)) continue;
        dfs(isConnected, i);
        answer++;
    }
    function dfs(graph, start) {
        let stack = [start];
        while (stack.length) {
            const currentNode = stack.pop();
            visited.add(currentNode);
            for (let i = 0; i < graph.length; i++) {
                if (i===currentNode) continue;
                if (graph[currentNode][i]===1 && !visited.has(i)) {
                    stack.push(i);
                }
            }
        }
    }
    return answer;
};

/*
Time Complexity: O(V^2+E) = O(V^2) or O(N^2); worst case scenario we will
have to traverse the entire matrix and perform a depth first search on every
vertex/node. the depth first search will be O(V+E) and this operation will
be performed for every vertex each iteration worst case scenario which 
simplifies down to O(V^2+E) = O(V^2);
Space Complexity: O(V) or O(N); worst case scenario our visited set will 
have a total of V elements inside it and our stack will have a total number
of V elements inside it so the additional space will be O(V+V) which 
simplifies down to O(V) or O(N);
*/