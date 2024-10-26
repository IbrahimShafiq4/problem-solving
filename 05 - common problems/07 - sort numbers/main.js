function sortNumbers(number) {
    let digits = [];

    if (number == 0) return 0;

    while (number > 0) {
        let digit = number % 10;
        digits.push(digit);
        number = Math.floor(number / 10);
    }

    // sorting Descending
    // const sortedDigits = digits.toSorted((a, b) => b - a);

    // sorting Ascending
    const sortedDigits = digits.toSorted((a, b) => a - b);

    return parseInt(sortedDigits.join(''), 10);
}

console.log(sortNumbers(321));
console.log(sortNumbers(987654));
