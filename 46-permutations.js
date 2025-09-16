// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer = [], curPerm = new Set();

    function backtrack() {
        if (curPerm.size === nums.length) {
            answer.push([...curPerm]);
            return
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!curPerm.has(nums[i])) {
                curPerm.add(nums[i]);
                backtrack();
                curPerm.delete(nums[i]);
            }
        }
        return;
    }

    backtrack();
    return answer;
};
/*1,2,3
f-answer=[],curPerm=(),i=2;
f-answer=[],curPerm=(1),i=2; done
f-answer=[],curPerm=(1,2),i=2; done
f-answer=[[1,2,3]],curPerm=(1,2,3),i=0; done
f-answer=[],curPerm=(1,3),i=2; done
f-answer=[[1,2,3],[1,3,2]],curPerm=(1,3,2),i=0; done
f-answer=[],curPerm=(2),i=2; done
f-answer=[],curPerm=(2,1),i=2; done
f-answer=[[1,2,3],[1,3,2],[2,1,3]],curPerm=(2,1,3),i=0; done
f-answer=[],curPerm=(2,3),i=2; done 
f-answer=[[1,2,3],[1,3,2],[2,1,3],[2,3,1]],curPerm=(2,3,1),i=0; done
f-answer=[],curPerm=(3),i=2; done
f-answer=[],curPerm=(3,1),i=2; done
f-answer=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2]],curPerm=(3,1,2),i=0; done
f-answer=[],curPerm=(3,2),i=2; done
f-answer=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]],curPerm=(3,2,1),i=0; done
*/

/*
Time Complexity: O(n!); worst case scenaerio it takes n! times to 
generate all permuatations of the input;
Space complexity: O(n!); we have to save n! amount of things inside our
answer array
*/