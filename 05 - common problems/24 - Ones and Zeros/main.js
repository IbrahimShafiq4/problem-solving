const binaryArrayToNumber = arr => {
    if (arr.length === 0) return 0;

    let counter = 0;

    counter = arr.reduceRight((acc, el, index) => {
        const power = arr.length - 1 - index;
        return acc + (el === 1 ? Math.pow(2, power) : 0);
    }, 0);

    return counter;
};

console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 0, 0, 1]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));