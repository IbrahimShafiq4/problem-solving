function numberToString(num) {
    // first solution
    // return String(num);

    // Second Solution
    // return num.toString()

    // Third Solution
    // return `${num}`

    // Fouth solution
    let digits = [];
    let result = '';

    if (num == 0) return '0';

    while (num > 0) {
        let digit = num % 10;
        digits.push(digit);
        num = Math.floor(num / 10);
    }

    digits.reverse()

    for (let i = 0; i < digits.length; i++) {
        result += digits[i]; 
    }

    return result
}

console.log(numberToString(123));
