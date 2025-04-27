/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums.length===1) {
        return nums
    }
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    while (i <= right) {
        if (nums[i]===2) {
            [ nums[i], nums[right] ] = [ nums[right], nums[i] ];
            right--;
        } else if(nums[i]===1) {
            i++;
        } else {
            [ nums[i], nums[left] ] = [ nums[left], nums[i] ];
            left++;
            i++;
        }
    }
    return nums
};

//Time Complexity: O(N) worst case we only do one traversal through the 
// entire array; This is also a two pointer technique question