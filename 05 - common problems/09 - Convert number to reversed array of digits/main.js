function digitize(n) {
    // First Way
    // let digits = [];

    // while (n > 0) {
    //     let digit = n % 10;
    //     digits.push(digit);
    //     n = Math.floor(n / 10);
    // }

    // return digits;

    // Second Way
    // return String(n).split('').map(Number).reverse()

    // Third Way
    return Array.from(String(n), Number).reverse()
}

console.log(digitize(35231))