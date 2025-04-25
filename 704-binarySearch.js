/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let scan = Math.floor((start + end) / 2);
        if (nums[scan]===target) {
            return scan;
        } else {
            if (nums[scan] > target) {
                end = scan - 1;
            } else {
                start = scan + 1;
            }
        }
    }
    return -1;
};