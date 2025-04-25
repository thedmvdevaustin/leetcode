/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = countPositive();
    let neg = countNegative();
    function countPositive() {
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            let scan = Math.floor((start + end) / 2);
            if (nums[scan] <= 0) {
                start = scan + 1;
            } else {
                end = scan - 1;
            }
        }
        return nums.length - start;
    }
    function countNegative(){
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            let scan = Math.floor((start + end) / 2);
            if (nums[scan] >= 0) {
                end = scan - 1;
            } else {
                start = scan + 1;
            }
        }
        return end + 1
    }
    return Math.max(pos, neg);
};