/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    const nextIndex = (i, dir) => {
        let direction = nums[i] > 0;
        if (dir!==direction) return -1;
        let next = ((i + nums[i]) % nums.length + nums.length) % nums.length;
        if (i===next) return -1;
        return next;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===0) continue;
        let slow = i;
        let fast = i;
        let direction = nums[i] > 0;

        while (true) {
            slow = nextIndex(slow, direction);
            if (slow===-1) break;
            fast = nextIndex(fast, direction);
            if (fast===-1) break;
            fast = nextIndex(fast, direction);
            if (fast===-1) break;
            if (slow===fast) return true;
        }

        let j = i;
        while (nums[j] > 0 === direction) {
            if (nums[j]===0) break;
            let next = nextIndex(j, direction);
            nums[j] = 0;
            j = next;
        }
    }
    return false;
};

/*
Time Complexity: O(N); worst case scenario we will have to iterate through the entire array once
since the while loop at the bottom and the if statement after the for loop prevents us from
checking any cycle that has already been checked;
Space Complexity: O(1); only constant extra space is being used
*/