// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

 

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true
 

// Constraints:

// 1 <= trips.length <= 1000
// trips[i].length == 3
// 1 <= numPassengersi <= 100
// 0 <= fromi < toi <= 1000
// 1 <= capacity <= 105

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let array = Array.from({ length: 10001 }, () => 0)
    for(const [numPassengers, from, to] of trips) {
        array[from]+=numPassengers;
        array[to]-=numPassengers;
    }
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total+=array[i];
        if (total > capacity) return false;
    }
    return true;
};

/*
Time Complexity: O(N); creating the array and traversing the array will always be a constant
of 1000 so we consider that to be O(1) constant time which leaves the traversal of trips which
results in O(N);
Space Complexity: O(1); since the length of the created array is 1001 we still consider that 
to be a constant so the result is constant extra space;
*/