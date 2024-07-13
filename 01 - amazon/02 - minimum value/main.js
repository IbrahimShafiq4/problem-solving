/* 
    We Need To Determine the minimum positive start value
    when you iteratively add elements from an array to it 
    the resulting sum is never less than one

    Constrains: 
    1 <= nums.length <= 100
    -100 <= nums.length <= 100
*/

/**
 * @param {number[]} nums
 * @return {number}
 * 
*/

// The function takes an array of numbers as input and returns a single number.
const minStartValue = (nums) => {

    // Initialize two variables: sumUp to keep track of the running sum, and minSum to store the minimum sum encountered.
    let sumUp = 0;
    let minSum = 1;

    // Iterate through each number in the input array.
    for (let num of nums) {

        // Add the current number to the running sum.
        sumUp += num;

        // Update minSum to be the minimum of the current running sum and the previous minSum.
        minSum = Math.min(sumUp, minSum);
    }

    // If the minimum sum encountered is greater than 0, 
    // return 1.
    if (minSum > 0) return 1;
    
    // If the minimum sum is less than or equal to 0, 
    // it means there are some negative values in the array 
    // which makes it impossible for the sum to always be
    // greater than or equal to one so 
    // return this as as the minimum initial positive value
    // return the absolute value of minSum plus 1.
    return (-1 * minSum + 1);
}

// Test Cases

// Test case 1: Output should be 5
console.log(minStartValue([-3, 2, -3, 4, 2]));

// Test case 2: Output should be 1
console.log(minStartValue([1, 2]));

// Test case 3: Output should be 5
console.log(minStartValue([1, -2, -3]));