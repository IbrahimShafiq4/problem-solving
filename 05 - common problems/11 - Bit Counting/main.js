// const countBits = function (n) {
//     let digits = [];
//     let binaryString = '';
//     let counter = 0;

//     if (n < 0) return;

//     while (n > 0) {
//         let digit = n % 10;
//         digits.push(digit);
//         n = Math.floor(n / 10);
//     }

//     digits.reverse();

//     for (let i = 0; i < digits.length; i++) {
//         for (let j = 3; j >= 0; j--) {
//             if (digits[i] >= 2 ** j) {
//                 binaryString += '1';
//                 digits[i] -= 2 ** j;
//             } else {
//                 binaryString += '0';
//             }
//         }
//     }

//     for (let bit of binaryString) {
//         if (bit === '1') {
//             counter++;
//         }
//     }

//     return `Number on 1s in ${binaryString} => ${counter}`;
// };

// Anoterh Way
const countBits = function (n) {
    return n.toString(2).split('').filter(bit => bit === '1').length;
};

console.log(countBits(1234))