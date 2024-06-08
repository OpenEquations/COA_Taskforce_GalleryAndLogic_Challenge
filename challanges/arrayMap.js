/**
 * Finds the contiguous subarray within an array that sums to a target value.
 */
function findContiguousSubarray(arr, target) {
    let contigArr = []; // Array to store the contiguous subarray
    let j = 0, sum = 0; // Initialize pointers and sum

    // Iterate over the array to find the contiguous subarray that sums to the target
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add current element to the sum
        contigArr.push(arr[i]); // Add current element to the contiguous subarray

        if (sum > target) {
            // If the sum exceeds the target, reset and start from the next element
            sum = 0;
            contigArr = [];
            i = ++j - 1; // Move the starting point forward and adjust i
        } else if (sum == target) {
            // If the sum equals the target, break the loop as the target is found
            break;
        }
    }

    return contigArr; // Return the contiguous subarray
}

// Example usage:
let arr = [15, 5, -2,-3, 16, 1, 2,3]; // Input array
let target = 17; // Target sum value

console.log(findContiguousSubarray(arr, target)); // Output the contiguous subarray
