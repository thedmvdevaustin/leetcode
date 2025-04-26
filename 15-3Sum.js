/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b);
    let answer = [];
    for(let i = 0; i < nums.length - 2; i++){
        if (i > 0 && nums[i]===nums[i-1]) {
            continue;
        }
        let start = i+1;
        let end = nums.length - 1;
        while (start < end) {
            if (nums[i] + nums[start] + nums[end]===0){
                answer.push([nums[i], nums[start], nums[end]]);
                start++;
                end++;
                while (start < end && nums[start]===nums[start - 1]){
                    start++;
                }
                while (start < end && nums[end]===nums[end+1]){
                    end--;
                }
            } else {
                if (nums[i] + nums[start] + nums[end] < 0) {
                    start++
                } else {
                    end--
                }
            };
        };
    };
    return answer;
};

// TIME COMPLEXITY O(N**2)
/* this is because worst case scenario we loop through the entire array
with the for loop and worst case loop through half the array every iteration
of the for loop with the while loop which is O(N/2) and will be reduced to O(N)
*/