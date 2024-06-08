/**
 * Finds the contiguous subarray within an array that sums to a target value.
 * contigArr stores temporally arrays that are contiguous but is creaned whenver it found exceeding or when the loop ends with sum less than target
 */
function findContiguousSubarray(arr, target) {
    let contigArr = []; // Array to store the contiguous subarray
    let j = 0, sum = 0; // Initialize pointers and sum

    // Iterate over the array to find the contiguous subarray that sums to the target
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add current element to the sum
        contigArr.push(arr[i]); // Add current element to the contiguous subarray

        if (target > 0 && sum > target) { // case where target is a positive number
            // If the sum exceeds the target, reset and start from the next element
            sum = 0;
            contigArr = []; // store contiguous temporally
            i = ++j - 1; // Move the starting point forward and adjust i
        } else if (target < 0 && sum < target) { // case where target is a negative number
                        // If the sum exceeds the target, reset and start from the next element
                        sum = 0;
                        contigArr = [];
                        i = ++j - 1; // Move the starting point forward and adjust i
        } else if (sum == target) {
            // If the sum equals the target, break the loop as the target is found
            break;
        }
        if(i === arr.length - 1 && sum < target) contigArr = [];
    }
    if(contigArr.length) return true //return true if contigArr is not empty
    return false; // Return false if contigArr is empty
}

// Example usage:
let arr = [1, 2, 3, 4, 5]; // Input array
let target = 16; // Target sum value

console.log(findContiguousSubarray(arr, target)); // Output the contiguous subarray
