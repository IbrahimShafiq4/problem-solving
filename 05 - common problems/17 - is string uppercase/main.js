// 1. Using the `every` Method
String.prototype.isUpperCase = function() {
    return this.split('').every(char => !/[a-z]/.test(char));
};

// Example usage:
console.log("C".isUpperCase()); // true
console.log("HELLO I AM DONALD".isUpperCase()); // true
console.log("hello I AM DONALD".isUpperCase()); // false
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()); // true

// Resetting prototype for the next solution
delete String.prototype.isUpperCase;

// 2. Using a Regular Expression (Alternative)
String.prototype.isUpperCase = function() {
    return /^[^a-z]*$/.test(this);
};

// // Example usage:
console.log("C".isUpperCase()); // true
console.log("HELLO I AM DONALD".isUpperCase()); // true
console.log("hello I AM DONALD".isUpperCase()); // false
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()); // false

// // Resetting prototype for the next solution
// delete String.prototype.isUpperCase;

// // 3. Using a `for...of` Loop
// String.prototype.isUpperCase = function() {
//     for (const char of this) {
//         if (/[a-z]/.test(char)) {
//             return false; // Found a lowercase letter
//         }
//     }
//     return true; // No lowercase letters found
// };

// // Example usage:
// console.log("C".isUpperCase()); // true
// console.log("HELLO I AM DONALD".isUpperCase()); // true
// console.log("hello I AM DONALD".isUpperCase()); // false
// console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()); // true

// // Resetting prototype for the next solution
// delete String.prototype.isUpperCase;

// // 4. Using `reduce`
// String.prototype.isUpperCase = function() {
//     return this.split('').reduce((isUpper, char) => {
//         return isUpper && !/[a-z]/.test(char);
//     }, true);
// };

// // Example usage:
// console.log("C".isUpperCase()); // true
// console.log("HELLO I AM DONALD".isUpperCase()); // true
// console.log("hello I AM DONALD".isUpperCase()); // false
// console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()); // true

// // Resetting prototype for the next solution
// delete String.prototype.isUpperCase;

// // 5. Using `filter`
// String.prototype.isUpperCase = function() {
//     return this.split('').filter(char => /[a-z]/.test(char)).length === 0;
// };

// // Example usage:
// console.log("C".isUpperCase()); // true
// console.log("HELLO I AM DONALD".isUpperCase()); // true
// console.log("hello I AM DONALD".isUpperCase()); // false
// console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()); // false
