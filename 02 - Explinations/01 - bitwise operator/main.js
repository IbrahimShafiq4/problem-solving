/* 
    Unary Operator +
    BitWise Operator: (Not ~)
*/

const myString = "123";

// console.log(typeof(myString)); // Output = 123
// console.log(typeof(+myString));
console.log(~~myString);

// 0 0 0 1  0 0 1 0  0 0 1 1

// 1 1 1 0  1 1 0 1  1 1 0 0

// 0 0 0 1  0 0 1 0  0 0 1 1
// 1        2           3

// console.log(~~myString); // Output = 123 as a number;
/* 
    ~~ شرحها
    '123' in decimal

    ~ will convert it into number and in binary

    '123' => 0001 0010 0011

    ~'123' => 1110 1101 1100

    ~~ => هترجع تحولها وتعكس ال 0 ل 1 والعكس

    ~-124 => 0001 0010 0011 
    0001 0010 0011 = 123

    so
    ~~ '123' => 123

    in decimal => 123 as a number
*/
