// Higher Order Functions

// Example 01
// This script demonstrates the use of higher-order functions, particularly the sort function.
// Declare an array of numbers.
const numbers = [4, 3, 5, 1, 9, 2];

// Define a sorting function (callback) for ascending order.
const sortAscending = (a, b) => a - b;

// Use the sort method on the 'numbers' array, and pass the sorting function as a callback.
// The sort function arranges elements in ascending order based on the return value of the callback.
numbers.sort(sortAscending);

// Print the sorted array to the console.
console.log(numbers);

// Example 02
// This script demonstrates the use of higher-order functions, particularly the Filter of an array of objects based on a specific property.

// Declaring an array of objects
const users = [
    { name: 'ibrahim', age: 23 },
    { name: 'Shafiq', age: 66 },
    { name: 'Ahmad', age: 36 },
]

// Define a filtering function to filter users based on age
const filterByAge = (user) => user.age >= 30;

// Use the filter method on the 'users' array, and pass the filtering function as a callback.
// The filter function returns a new array containing only the elements for which the callback returns true.
const filteredUsers = users.filter(filterByAge);

// here is another solution without making a new variable 
// const filteredUsers = users.filter((user) => user.age >= 30);

// Print the filtered array of users to the console.
console.log(filteredUsers);
