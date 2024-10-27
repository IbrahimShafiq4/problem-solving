function nameThatNumber(x) {
    const ones = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ];

    const teens = [
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy",
        "eighty", "ninety"
    ];

    if (x < 10) return ones[x];
    if (x < 20) return teens[x - 10];
    if (x % 10 === 0) return tens[Math.floor(x / 10)];

    return tens[Math.floor(x / 10)] + " " + ones[x % 10];
}

console.log(nameThatNumber(4));
console.log(nameThatNumber(19));
console.log(nameThatNumber(27));

function nameThatNumberTwo(x) {
    const units = [
        "zero", "one", "two", "three", "four", "five", 
        "six", "seven", "eight", "nine", "ten", 
        "eleven", "twelve", "thirteen", "fourteen", 
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    const tens = [
        "", "", "twenty", "thirty", "forty", "fifty", 
        "sixty", "seventy", "eighty", "ninety"
    ];

    if (x < 20) {
        return units[x];
    } else {
        const tensPlace = Math.floor(x / 10);
        const unitsPlace = x % 10;
        return unitsPlace === 0 
            ? tens[tensPlace] 
            : tens[tensPlace] + " " + units[unitsPlace];
    }
}

console.log(nameThatNumberTwo(4));
console.log(nameThatNumberTwo(19));
console.log(nameThatNumberTwo(99));
