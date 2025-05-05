function isStrobogrammaticNumber(str) {
    let strobo_num = {
        '0': '0',
        '1': '1',
        '8': '8',
        '6': '9',
        '9': '6'
    }

    if (str.length===1) {
        return str[0]==='0' || str[0]==='1' || str[0]==='8';
    } else {
        let left = 0;
        let right = str.length - 1;
        while (left <= right) {
            if (!strobo_num[str[left]] === str[right]) {
                return false;
            } else {
                left++;
                right--;
            }
        }
        return true;
    }
}

//Time Complexity: O(N); worst case traversal occurs to the element after
// the middle which would mean it is O(N/2) which simplifies down to O(N)
/*
Space Complexity: O(1); no new data is created outside of the input
*/