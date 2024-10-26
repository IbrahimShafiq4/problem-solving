function highAndLow(numbers) {
    const arr = numbers.split(' ').map(Number);
    const high = Math.max(...arr);
    const low = Math.min(...arr);

    return `${high} ${low}`;
}

console.log(highAndLow("1 2 3 4 5"))