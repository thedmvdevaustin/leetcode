// We are given an array containing n objects. Each object, when created,
// was assigned a unique number from the range 1 to n based on their 
// creation sequence. This means that the object with sequence number 3 
// was created just before the object with sequence number 4.
// Write a function to sort the objects in-place on their creation
// sequence number in  without using any extra space. For simplicity, 
// let’s assume we are passed an integer array containing only the 
// sequence numbers, though each number is actually an object.


function cyclicSort(array) {
    if (array.length < 2) return array;
    let i = 0, element = array[0];
    while (i < array.length) {
        let temp = array[element-1];
        array[element-1] = element;
        element = temp;
        i++;
    }
    return array;
}

console.log(cyclicSort([3,5,2,1,4]))
console.log(cyclicSort([3,5,2,1,4,6]))
/*
Time Complexity: O(N); all cases will take the length of the array to 
complete which simplifies down to O(N);
Space Complexity: O(1); no additional space is needed
*/