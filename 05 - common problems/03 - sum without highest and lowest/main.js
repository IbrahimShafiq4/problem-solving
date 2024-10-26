function sumArray(arr) {
    if (arr === null || arr.length <= 2) return 0;
    return arr.sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, cur) => acc + cur, 0);
}

console.log(sumArray([6, 2, 1, 8, 10]))