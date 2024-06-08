/**
 * Processes the input string based on its length.
 * If the length is divisible by 3, the string is reversed.
 * If the length is divisible by 5, each character is replaced by its ASCII value.
 * I have only checkd for 3 and 5 as it works for on 15 too
 * This codes complies to the constraint of time and space complexity of O(n)
 */
function processString(input) {
    let string = input; // Initialize the input string
    let stringAsci = ''; // Variable to store ASCII representation

    // If the string length is divisible by 3, reverse the string
    if (string.length % 3 === 0) {
        string = string.split('').reverse().join('');
    }

    // If the string length is divisible by 5, convert each character to its ASCII value
    if (string.length % 5 === 0) {
        for (let i = 0; i < string.length; i++) {
            stringAsci += ' ' + string.charAt(i).charCodeAt(0);
        }
        string = stringAsci.trim(); // Remove leading space
    }

    return string; // Return the processed string
}

// Example usage:
let string = 'HelloWorldTest!'; // Input string
//expected output: 33 116 115 101 84 100 108 114 111 87 111 108 108 101 72
//test on other string to see output
console.log(processString(string)); // Output the processed string
